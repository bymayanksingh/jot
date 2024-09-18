import { useState, useEffect } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulating notifications
    const newNotifications = [
      { id: 1, message: "Don't forget to write in your journal today!" },
      { id: 2, message: "New daily prompt available!" },
    ];
    setNotifications(newNotifications);
  }, []);

  return (
    <div className="notifications">
      <button onClick={() => setIsOpen(!isOpen)} className="icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
      </button>
      {isOpen && (
        <div className="notification-panel">
          {notifications.length > 0 ? (
            notifications.map(notif => (
              <div key={notif.id} className="notification-item">{notif.message}</div>
            ))
          ) : (
            <div className="notification-item">No new notifications</div>
          )}
        </div>
      )}
    </div>
  );
}
