import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Support.css';

function Support() {
  const { appName } = useParams();
  
  // Convert slug to display name
  const displayName = appName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Select the appropriate icon based on the app
  const getAppIcon = () => {
    switch(appName) {
      case 'roamio':
        return '/roamio.png';
      case 'airplane-tracker':
        return '/plane2.png';
      case 'insider-signal':
        return '/insidersignallogo.png';
      default:
        return '/plane2.png';
    }
  };

  return (
    <div className="support-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>{displayName}</span> / Support
      </nav>
      
      <div className="support-content">
        <img 
          src={getAppIcon()} 
          alt={`${displayName} App Icon`} 
          className="app-icon-large"
        />
        <h1>{displayName}</h1>
        <p className="support-message">
          I'd love to hear your feedback and help with any questions you might have!
        </p>
        <a href="mailto:garrettkmoody@gmail.com" className="contact-email">
          garrettkmoody@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Support;

