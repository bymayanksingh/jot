import React, { createContext, useState, useContext, useEffect } from 'react';

const EntriesContext = createContext();

export function useEntries() {
  return useContext(EntriesContext);
}

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Initialize with sample entries
    const sampleEntries = [
      { id: 1, title: "Back to school", body: "First day of the new semester", tag: "education", date: "2024-09-01" },
      { id: 2, title: "Project kickoff", body: "Started the new work project today", tag: "work", date: "2024-09-05" },
      { id: 3, title: "Autumn walk", body: "Enjoyed the changing leaves in the park", tag: "personal", date: "2024-09-10" },
      { id: 4, title: "Book club meeting", body: "Discussed 'The Midnight Library'", tag: "hobbies", date: "2024-09-15" },
      { id: 5, title: "Meal prep Sunday", body: "Prepared healthy meals for the week", tag: "health", date: "2024-09-20" },
      { id: 6, title: "Movie night", body: "Watched a new sci-fi film with friends", tag: "social", date: "2024-09-25" },
      { id: 7, title: "Monthly review", body: "Reflected on goals and achievements", tag: "personal", date: "2024-09-30" },
    ];
    setEntries(sampleEntries);
  }, []);

  const addEntry = (newEntry) => {
    setEntries(prevEntries => [{ id: Date.now(), ...newEntry }, ...prevEntries]);
  };

  const deleteEntry = (id) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
  };

  return (
    <EntriesContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </EntriesContext.Provider>
  );
}