import React from 'react';
import './AdminDashboard.css';
import bgImage from '../../Assets/Architecture-bg.jpg';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="admin-card">
        <h2>👨‍💼 Admin Dashboard</h2>

        <section className="admin-section">
          <h3>📊 Overview</h3>
          <ul>
            <li><strong>Total Users:</strong> 120</li>
            <li><strong>Professionals Listed:</strong> 45</li>
            <li><strong>Consultations Booked:</strong> 230</li>
            <li><strong>Reports Filed:</strong> 7</li>
          </ul>
        </section>

        <section className="admin-section">
          <h3>👥 Manage Users</h3>
          <ul>
            <li>View all users</li>
            <li>Ban or suspend accounts</li>
            <li>Send notifications</li>
          </ul>
        </section>

        <section className="admin-section">
          <h3>🏗️ Manage Professionals</h3>
          <ul>
            <li>Approve/Reject profiles</li>
            <li>Update listing information</li>
            <li>Monitor consultation stats</li>
          </ul>
        </section>

        <section className="admin-section">
          <h3>📜 Activity Logs</h3>
          <ul>
            <li>Last login: 19-Apr-2025, 10:00 AM</li>
            <li>5 profile updates today</li>
            <li>3 new professionals pending review</li>
          </ul>
        </section>

        <section className="admin-actions">
          <button className="admin-btn">Export Data</button>
          <button className="admin-btn">Review Reports</button>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
