// src/pages/ExtraPage.jsx
import React from 'react';
import './ExtraPage.css';
import bgImage from '../../Assets/Architecture-bg.jpg';

const faqs = [
  {
    question: "What is Arquitecto?",
    answer: "Arquitecto is an online platform to connect with architects, designers, and painters."
  },
  {
    question: "How do I book a consultation?",
    answer: "Login, search, and request consultation easily."
  },
  {
    question: "Is the app free?",
    answer: "Yes for customers, professionals pay listing fees."
  },
  {
    question: "What services can I find on Arquitecto?",
    answer: "You can consult with architects, interior designers, and painters for your space."
  },
  {
    question: "Can I upload photos or 3D images during consultation?",
    answer: "Yes, users can upload images and 3D files for better communication."
  },
  {
    question: "How do professionals get listed?",
    answer: "They create a profile, submit verification, and get approved by the admin."
  },
  {
    question: "Is my personal data safe?",
    answer: "Absolutely. We follow strict data privacy and secure your communication end-to-end."
  },
  {
    question: "Can I switch the language in the app?",
    answer: "Yes, you can select from multiple languages in chatbot or settings."
  },
  {
    question: "What happens after booking a consultation?",
    answer: "You’ll get an email and in-app notification with meeting details."
  },
  {
    question: "Can I reschedule or cancel my booking?",
    answer: "Yes, via your profile’s booking history or your confirmation email."
  },
  {
    question: "Do architects provide blueprints or 3D renders?",
    answer: "Yes, they can upload files directly through chat or via email if discussed."
  },
  {
    question: "How do I contact support?",
    answer: "Use the chatbot, in-app support button, or email us via Contact section."
  },
];

const ExtraPage = () => {
  return (
    <div className="faq-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h4 className="faq-question">{faq.question}</h4>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraPage;
