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

  return (
    <div className="support-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>{displayName}</span> / Support
      </nav>
      
      <header className="support-header">
        <h1>{displayName} Support</h1>
      </header>

      <div className="support-content">
        <section className="support-section">
          <h2>Getting Started</h2>
          <p>Welcome to {displayName}! Here are some tips to get you started:</p>
          <ul>
            <li>Download the app from the App Store</li>
            <li>Create an account or sign in</li>
            <li>Grant necessary permissions for the best experience</li>
          </ul>
        </section>

        <section className="support-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>How do I track flights?</h3>
            <p>Open the app and enter a flight number or browse the map to see nearby flights.</p>
          </div>

          <div className="faq-item">
            <h3>Is an internet connection required?</h3>
            <p>Yes, an active internet connection is required to receive real-time flight data.</p>
          </div>

          <div className="faq-item">
            <h3>How can I save favorite flights?</h3>
            <p>Tap the star icon on any flight to add it to your favorites list.</p>
          </div>
        </section>

        <section className="support-section">
          <h2>Contact Us</h2>
          <p>If you need further assistance, please contact our support team:</p>
          <div className="contact-info">
            <p>📧 Email: support@example.com</p>
            <p>We typically respond within 24-48 hours.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Support;

