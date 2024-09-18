import { useState } from 'react';

export default function EntryList({ entries, onDeleteEntry }) {
  return (
    <div className="entry-list">
      {entries.map(entry => (
        <div key={entry.id} className="entry-item">
          <h3>
            {entry.title}
            <span className="entry-date">{entry.date}</span>
          </h3>
          <div className="entry-body">
            <p>{entry.body}</p>
          </div>
          <div className="entry-footer">
            <span className="entry-tag">{entry.tag}</span>
            <button onClick={() => onDeleteEntry(entry.id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

