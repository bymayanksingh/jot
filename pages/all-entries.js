import Head from 'next/head'
import Header from '../components/Header'
import EntryList from '../components/EntryList'
import { useEntries } from '../contexts/EntriesContext'

export default function AllEntries() {
  const { entries, deleteEntry } = useEntries();

  return (
    <div className="container">
      <Head>
        <title>All Entries | Jot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <h1>All Entries</h1>
        <EntryList entries={entries} onDeleteEntry={deleteEntry} />
      </main>
    </div>
  )
}
