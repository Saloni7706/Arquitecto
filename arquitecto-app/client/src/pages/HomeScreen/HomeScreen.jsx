import React, { useEffect, useState } from 'react';
import './HomeScreen.css';
import Navbar from '../../pages/components/Navbar/Navbar';
import bgImage from '../../Assets/Architecture-bg.jpg'; 
import Axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Failed to fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />

      <div className="hero">
        <h1>Welcome to Arquitecto</h1>
        <p>Your virtual gateway to design</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Display data fetched from backend */}
      {data && (
      <div className="backend-data">
      <h3>🔄 Latest Backend Message:</h3>
      <p>{data.message}</p> {/* ✅ This accesses the string properly */}
      </div>
      )}

      <section>
        <h2 className="features-heading">Why Choose Arquitecto?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Online Consultations</h3>
            <ul>
              <li>Connect with experts from anywhere</li>
              <li>Video call with top-rated pros</li>
              <li>Flexible schedules</li>
            </ul>
            <p>Connect from anywhere with top-rated professionals.</p>
          </div>
          <div className="feature-card">
            <h3>3D Visual Previews</h3>
            <ul>
              <li>Preview your space in 3D</li>
              <li>Adjust designs in real-time</li>
              <li>Immersive walkthroughs</li>
            </ul>
            <p>Visualize your designs in 3D before starting construction.</p>
          </div>
          <div className="feature-card">
            <h3>Push Notifications</h3>
            <ul>
              <li>Never miss project updates</li>
              <li>Stay in the loop with reminders</li>
              <li>Real-time communication</li>
            </ul>
            <p>Stay updated on your projects, chats, and appointments.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>“Using Arquitecto was a game-changer! I redesigned my kitchen from my couch.”</p>
          <strong>- Piya R.</strong>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ❤️ for dreamers. © 2025 Arquitecto</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
