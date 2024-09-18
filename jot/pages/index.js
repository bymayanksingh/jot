import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import CreateNote from '../components/CreateNote'
import TagList from '../components/TagList'
import Search from '../components/Search'
import Calendar from '../components/Calendar'
import EntryList from '../components/EntryList'
import { useEntries } from '../contexts/EntriesContext'

export default function Home() {
  const { entries, addEntry, deleteEntry } = useEntries();
  const [filteredEntries, setFilteredEntries] = useState(entries);
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 7))); // Default to 7 days ago
  const [endDate, setEndDate] = useState(new Date()); // Default to today
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterEntries = useCallback(() => {
    let filtered = entries;
    if (startDate && endDate) {
      filtered = filtered.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= startDate && entryDate <= endDate;
      });
    }
    if (selectedTag && selectedTag !== 'All') {
      filtered = filtered.filter(entry => entry.tag === selectedTag);
    }
    if (searchTerm.trim()) {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(entry =>
        (entry.content || '').toLowerCase().includes(lowercaseSearchTerm) ||
        (entry.title || '').toLowerCase().includes(lowercaseSearchTerm)
      );
    }
    setFilteredEntries(filtered);
  }, [entries, startDate, endDate, selectedTag, searchTerm]);

  useEffect(() => {
    filterEntries();
  }, [filterEntries]);

  const handleCreateNote = (newNote) => {
    addEntry(newNote);
  };

  const handleDateRangeSelect = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container">
      <Head>
        <title>Jot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>What's on your mind?</h1>
        <p>A place for your thoughts, ideas, and inspiration</p>

        <CreateNote onCreateNote={handleCreateNote} />
        <TagList
          entries={entries}
          onTagSelect={handleTagSelect}
          selectedTag={selectedTag}
        />
        <Search onSearch={handleSearch} />
        <Calendar
          onDateRangeSelect={handleDateRangeSelect}
          startDate={startDate}
          endDate={endDate}
        />
        <EntryList entries={filteredEntries} onDeleteEntry={deleteEntry} />
      </main>
    </div>
  );
}
