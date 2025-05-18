import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import ExtraPage from './pages/ExtraPage/ExtraPage';
import AdminDashboard from 'AdminDashboard';
import Chatbot from './pages/ChatbotScreen/ChatbotScreen';
import LoginScreen from './LoginScreen/LoginScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chatbot" element={<ChatbotScreen />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}
