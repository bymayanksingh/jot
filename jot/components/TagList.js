import { useState, useEffect } from 'react';

export default function TagList({ entries, onTagSelect, selectedTag }) {
  const [tags, setTags] = useState(['All']);

  useEffect(() => {
    const uniqueTags = [...new Set(entries.map(entry => entry.tag).filter(Boolean))];
    setTags(['All', ...uniqueTags]);
  }, [entries]);

  return (
    <div className="tag-list">
      {tags.map(tag => (
        <button 
          key={tag} 
          className={`tag ${selectedTag === tag ? 'selected' : ''}`} 
          onClick={() => onTagSelect(tag)}
        >
          {tag === 'All' ? 'All' : `#${tag}`}
        </button>
      ))}
    </div>
  );
}

