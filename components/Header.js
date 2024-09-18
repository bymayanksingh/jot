import Link from 'next/link';
import Notifications from './Notifications';
import Settings from './Settings';
import Help from './Help';

export default function Header({ onFontChange }) {
  return (
    <header>
      <div className="logo">
        <span className="logo-icon">◆</span>
        <span className="logo-text">Jot</span>
      </div>
      <nav>
        <Link href="/">Today</Link>
        <Link href="/all-entries">Entries</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/daily-prompts">Daily prompts</Link>
      </nav>
      <div className="header-icons">
        <Notifications />
        <Settings onFontChange={onFontChange} />
        <Help />
      </div>
    </header>
  );
}
