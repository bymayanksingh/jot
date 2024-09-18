import Head from 'next/head'
import Header from '../components/Header'
import { useEntries } from '../contexts/EntriesContext'
import { useState, useEffect } from 'react'

export default function Stats() {
  const { entries } = useEntries();
  const [stats, setStats] = useState({
    totalEntries: 0,
    averageEntriesPerWeek: 0,
    longestStreak: 0,
    currentStreak: 0,
    mostUsedTags: [],
    entriesByMonth: {},
    wordCount: 0,
  });

  useEffect(() => {
    calculateStats();
  }, [entries]);

  const calculateStats = () => {
    const totalEntries = entries.length;
    const sortedEntries = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Calculate average entries per week
    const firstEntryDate = new Date(sortedEntries[0]?.date);
    const lastEntryDate = new Date(sortedEntries[sortedEntries.length - 1]?.date);
    const weeksBetween = Math.ceil((lastEntryDate - firstEntryDate) / (7 * 24 * 60 * 60 * 1000));
    const averageEntriesPerWeek = weeksBetween > 0 ? (totalEntries / weeksBetween).toFixed(1) : 0;

    // Calculate streaks
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let previousDate = null;

    for (const entry of sortedEntries) {
      const currentDate = new Date(entry.date);
      if (previousDate) {
        const dayDifference = (currentDate - previousDate) / (24 * 60 * 60 * 1000);
        if (dayDifference === 1) {
          tempStreak++;
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 1;
        }
      } else {
        tempStreak = 1;
      }
      previousDate = currentDate;
    }
    currentStreak = tempStreak;
    longestStreak = Math.max(longestStreak, tempStreak);

    // Calculate most used tags
    const tagCounts = {};
    entries.forEach(entry => {
      tagCounts[entry.tag] = (tagCounts[entry.tag] || 0) + 1;
    });
    const mostUsedTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag, count]) => ({ tag, count }));

    // Calculate entries by month
    const entriesByMonth = {};
    entries.forEach(entry => {
      const month = new Date(entry.date).toLocaleString('default', { month: 'long' });
      entriesByMonth[month] = (entriesByMonth[month] || 0) + 1;
    });

    // Calculate total word count
    const wordCount = entries.reduce((total, entry) => {
      return total + entry.body.split(/\s+/).length;
    }, 0);

    setStats({
      totalEntries,
      averageEntriesPerWeek,
      longestStreak,
      currentStreak,
      mostUsedTags,
      entriesByMonth,
      wordCount,
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Stats | Jot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <h1>Your Journal Stats</h1>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>Total Entries</h3>
            <p>{stats.totalEntries}</p>
          </div>
          <div className="stat-item">
            <h3>Average Entries per Week</h3>
            <p>{stats.averageEntriesPerWeek}</p>
          </div>
          <div className="stat-item">
            <h3>Longest Streak</h3>
            <p>{stats.longestStreak} days</p>
          </div>
          <div className="stat-item">
            <h3>Current Streak</h3>
            <p>{stats.currentStreak} days</p>
          </div>
          <div className="stat-item">
            <h3>Total Word Count</h3>
            <p>{stats.wordCount}</p>
          </div>
        </div>

        <h2>Most Used Tags</h2>
        <ul className="tag-list">
          {stats.mostUsedTags.map(({ tag, count }) => (
            <li key={tag} className="tag-item">
              {tag} ({count})
            </li>
          ))}
        </ul>

        <h2>Entries by Month</h2>
        <ul className="month-list">
          {Object.entries(stats.entriesByMonth).map(([month, count]) => (
            <li key={month} className="month-item">
              {month}: {count} entries
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
