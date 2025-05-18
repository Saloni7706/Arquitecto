import React, { useState } from 'react';
import './LoginScreen.css';
import bgImage from '../../Assets/Architecture-bg.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>

        <div className="extra-options">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Create an Account</a>
        </div>

        <div className="social-login">
          <p>Or login with</p>
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
