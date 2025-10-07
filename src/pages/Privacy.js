import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Privacy.css';

function Privacy() {
  const { appName } = useParams();
  
  // Convert slug to display name
  const displayName = appName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="privacy-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>{displayName}</span> / Privacy Policy
      </nav>
      
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="app-name">{displayName}</p>
        <p className="last-updated">Last Updated: October 7, 2025</p>
      </header>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy describes how {displayName} ("we", "us", or "our") collects, 
            uses, and shares information about you when you use our mobile application.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <h3>Information You Provide</h3>
          <ul>
            <li>Account information (email, name)</li>
            <li>User preferences and settings</li>
            <li>Feedback and support requests</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Device information (model, operating system)</li>
            <li>Usage data and analytics</li>
            <li>Location data (if you grant permission)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve and personalize your experience</li>
            <li>To send you updates and notifications</li>
            <li>To respond to your questions and support requests</li>
            <li>To analyze usage patterns and improve our app</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information only in 
            the following circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>With service providers who assist us in operating our app</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information. However, no method of transmission over the internet is 
            100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our app is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last 
            Updated" date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="contact-info">
            <p>📧 Email: privacy@example.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Privacy;

