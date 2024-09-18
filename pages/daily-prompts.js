import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { useEntries } from '../contexts/EntriesContext';
import { useRouter } from 'next/router';

const prompts = [
  "What are you grateful for today?",
  "Describe a challenge you're currently facing and how you plan to overcome it.",
  // ... other prompts
];

export default function DailyPrompts() {
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [response, setResponse] = useState('');
  const { addEntry } = useEntries();
  const router = useRouter();

  useEffect(() => {
    getRandomPrompt();
  }, []);

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!response) return;

    const newEntry = {
      title: `Daily Prompt: ${currentPrompt}`,
      body: response,
      tag: 'Daily Prompt',
      date: new Date().toISOString().split('T')[0],
    };

    addEntry(newEntry);
    setResponse('');
    router.push('/');
  };

  return (
    <div className="container">
      <Head>
        <title>Daily Prompts | Jot</title>
      </Head>
      <Header />
      <main className="daily-prompts">
        <h1>Daily Writing Prompt</h1>
        <div className="prompt-container">
          <p className="prompt">{currentPrompt}</p>
        </div>
        <form onSubmit={handleSubmit} className="prompt-response-form">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your response here..."
            required
          ></textarea>
          <button type="submit" className="submit-response-btn">Save Response</button>
        </form>
      </main>
    </div>
  );
}
