import React from 'react';
import './ArchitectsSection.css';
import Akash from '../../Assets/Akash.avif';
import Riya from '../../Assets/Riya.avif';
import Deno from '../../Assets/Deno.jpg';
import John from '../../Assets/John.jpg';
import Monika from '../../Assets/Monika.jpg';
import Rihan from '../../Assets/Rihan.jpg';
import bgImage from '../../Assets/Architecture-bg.jpg'; 

const ArchitectsSection = () => {
  return (
    <section className="architects-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2>Meet Our Architects & Consultants</h2>
      <div className="profiles">
        <div className="profile-card">
        <img src={Akash} alt="Architect" />

          <h4>Akash Sharma</h4>
          <p>Senior Architect</p>
          <ul>
            <li>15+ years experience</li>
            <li>Specialist in modern homes</li>
            <li>Available for consultation</li>
          </ul>
        </div>
        <div className="profile-card">
        <img src={Deno} alt="Architect" />
   
          <h4>Deno Royal</h4>
          <p>Junior Architect</p>
          <ul>
            <li>5+ years experience</li>
            <li>Specialist in modern interior homes decor</li>
            <li>Available for consultation</li>
          </ul>
        </div>

        <div className="profile-card">
        <img src={John} alt="Consultant" />

          <h4>John suzuki</h4>
          <p>Exterior Consultant</p>
          <ul>
            <li>Expert in Scandinavian design</li>
            <li>Design planning & budgeting</li>
            <li>Virtual consultations</li>
          </ul>
        </div>

        <div className="profile-card">
        <img src={Monika} alt="Consultant" />

          <h4>Monika Dwivedi</h4>
          <p>Interior Consultant</p>
          <ul>
            <li>Expert in Scandinavian design</li>
            <li>Design planning & budgeting</li>
            <li>Virtual consultations</li>
          </ul>
        </div>

        <div className="profile-card">
        <img src={Rihan} alt="Consultant" />

          <h4>Rihan Khan</h4>
          <p>Consultant</p>
          <ul>
            <li>Expert in Modern home design</li>
            <li>Design planning & budgeting</li>
            <li>Virtual consultations</li>
          </ul>
        </div>
        
        <div className="profile-card">
        <img src={Riya} alt="Consultant" />

          <h4>Riya Patel</h4>
          <p>Interior Consultant</p>
          <ul>
            <li>Expert in Scandinavian design</li>
            <li>Design planning & budgeting</li>
            <li>Virtual consultations</li>
          </ul>
        </div>
        </div>
    </section>
  );
};

export default ArchitectsSection;
