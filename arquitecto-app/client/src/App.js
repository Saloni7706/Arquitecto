import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import ChatbotScreen from './pages/ChatbotScreen/ChatbotScreen';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ExtraPage from './pages/ExtraPage/ExtraPage';
import Navbar from './pages/components/Navbar/Navbar';
import Gallery from './pages/Gallery/Gallery';
import ArchitectsSection from './pages/ArchitectsSection/ArchitectsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chatbot" element={<ChatbotScreen />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/architect" element={<ArchitectsSection />} />

        <Route path="/gallery" element={<Gallery />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
