import { useState } from 'react';

export default function CreateNote({ onCreateNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !tag) return;
    onCreateNote({ title, body, tag, date: new Date().toISOString().split('T')[0] });
    setTitle('');
    setBody('');
    setTag('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-note">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
      />
      <button type="submit" className="create-note-btn">Add Note</button>
    </form>
  );
}
