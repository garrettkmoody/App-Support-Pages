import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const apps = [
    {
      name: 'Airplane Tracker',
      slug: 'airplane-tracker',
      description: 'Track flights in real-time',
      icon: '✈️'
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Support Pages</h1>
        <p>Select an app to view its support page or privacy policy</p>
      </header>
      
      <div className="apps-grid">
        {apps.map(app => (
          <div key={app.slug} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <h2>{app.name}</h2>
            <p>{app.description}</p>
            <div className="app-links">
              <Link to={`/${app.slug}/support`} className="app-link">
                Support
              </Link>
              <Link to={`/${app.slug}/privacy`} className="app-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

