import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch tags from an API or local storage
    const sampleTags = ['work', 'personal', 'food', 'books', 'fitness'];
    setTags(sampleTags);
  }, []);

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  return (
    <div className="container">
      <Head>
        <title>Tags | Jot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <h1>Tags</h1>
        <form onSubmit={handleAddTag} className="add-tag-form">
          <input 
            type="text" 
            value={newTag} 
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Enter new tag"
          />
          <button type="submit">Add Tag</button>
        </form>
        <div className="tag-list">
          {tags.map(tag => (
            <div key={tag} className="tag-item">
              <span>#{tag}</span>
              <button onClick={() => handleDeleteTag(tag)}>✕</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
