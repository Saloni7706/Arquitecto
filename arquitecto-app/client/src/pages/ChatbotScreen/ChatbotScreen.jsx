import React, { useState, useRef } from 'react';
import './ChatbotScreen.css';
import bgImage from '../../Assets/Architecture-bg.jpg';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: '👋 Hello! How can I assist you today?' }]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const recognitionRef = useRef(null);

  // OpenAI API key (load securely from .env in real use)
  const OPENAI_API_KEY = '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';

  const sendMessage = async (text) => {
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: `You are an architecture expert who speaks ${language}.` },
            ...newMessages.map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          ]
        })
      });

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: '❌ Error fetching response. Please try again later.' }]);
    }
  };

  // Voice-to-text (Web Speech API)
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support voice input.');
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = language;
    recognitionRef.current.start();

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
  };

  const handleFAQ = (question) => {
    setInput(question);
    sendMessage(question);
  };

  return (
    <div className="chatbot-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="chatbot-card">
        <h2>Arquitecto Assistant 🤖</h2>

        <div className="language-select">
          <label>🌍 Language: </label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div className="faq-section">
          <button onClick={() => handleFAQ('What are the trending home designs in 2025?')}>🏠 Trending Designs</button>
          <button onClick={() => handleFAQ('How can I reduce construction costs?')}>💸 Cost Saving Tips</button>
          <button onClick={() => handleFAQ('What are eco-friendly materials for building?')}>🌱 Eco Materials</button>
        </div>

        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          />
          <button onClick={() => sendMessage(input)}>Send</button>
          <button className="mic-btn" onClick={startListening}>🎤</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
