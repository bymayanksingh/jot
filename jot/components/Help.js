import { useState } from 'react';

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help">
      <button onClick={() => setIsOpen(!isOpen)} className="icon-button">?</button>
      {isOpen && (
        <div className="help-panel">
          <h3>Help & FAQ</h3>
          <ul>
            <li><strong>How do I create a new entry?</strong> Click on "What's on your mind?" on the main page to start a new entry.</li>
            <li><strong>Can I edit my entries?</strong> Currently, editing is not supported. You can delete and recreate an entry if needed.</li>
            <li><strong>What are tags for?</strong> Tags help you categorize your entries for easier filtering and searching.</li>
            <li><strong>How do I use daily prompts?</strong> Visit the "Daily prompts" page for writing inspiration.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
