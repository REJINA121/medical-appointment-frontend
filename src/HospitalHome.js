// src/components/HospitalHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HospitalHome.css'; // Import the CSS file

const HospitalHome = () => {
  return (
    <div className="HospitalHome">
      <h1>Welcome to [Your Hospital Name]</h1>
      <p>Quality Healthcare at Your Fingertips</p>

      <div className="button-container">
        <Link to="/patient">
        <button>Patient Details</button>
        </Link>
        <Link to="/doctor">
        <button>Doctor Details</button>
        </Link>
        <Link to="/appointment">
        <button>Appointment Details</button>
        </Link>
        <Link to="/schedule">
        <button>Schedule Details</button>
        </Link>
        <Link to="/reminder">
        <button>Reminder Details</button>
        </Link>
        <Link to="/queue">
        <button>Queue Details</button>
        </Link>
      </div>
    </div>
  );
};

export default HospitalHome;

