import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import CreateNote from '../components/CreateNote'
import TagList from '../components/TagList'
import Calendar from '../components/Calendar'
import EntryList from '../components/EntryList'
import { useEntries } from '../contexts/EntriesContext'

export default function Home() {
  const { entries, addEntry, deleteEntry } = useEntries();
  const [filteredEntries, setFilteredEntries] = useState(entries);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    filterEntries();
  }, [entries, startDate, endDate, selectedTag]);

  const filterEntries = () => {
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
    setFilteredEntries(filtered);
  };

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
