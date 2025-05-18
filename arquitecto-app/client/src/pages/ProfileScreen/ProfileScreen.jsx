import React, { useState, useEffect } from 'react';
import './ProfileScreen.css';
import defaultAvatar from '../../Assets/default-avtar.jpg';
import bgImage from '../../Assets/Architecture-bg.jpg';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Dream Lane',
    phone: '+123 456 7890',
    profession: 'Architect',
    avatar: '',
  });

  const [editing, setEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(defaultAvatar);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('profileData'));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.avatar) setAvatarPreview(storedUser.avatar);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setUser((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(user));
    setEditing(false);
  };

  return (
    <div className="profile-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="profile-card">
        <img src={avatarPreview} alt="Avatar" className="profile-avatar" />
        {editing && <input type="file" onChange={handleAvatarChange} />}

        <h2>User Profile</h2>
        <ul>
          <li><strong>Name:</strong> {editing ? <input name="name" value={user.name} onChange={handleChange} /> : user.name}</li>
          <li><strong>Email:</strong> {editing ? <input name="email" value={user.email} onChange={handleChange} /> : user.email}</li>
          <li><strong>Address:</strong> {editing ? <input name="address" value={user.address} onChange={handleChange} /> : user.address}</li>
          <li><strong>Phone:</strong> {editing ? <input name="phone" value={user.phone} onChange={handleChange} /> : user.phone}</li>
          <li><strong>Profession:</strong> {editing ? <input name="profession" value={user.profession} onChange={handleChange} /> : user.profession}</li>
        </ul>

        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        )}
      </div>

      <div className="profile-subsection">
        <h3>📁 Saved Projects</h3>
        <ul>
          <li>Modern Living Room – <em>April 2025</em></li>
          <li>Eco-Friendly House Design – <em>March 2025</em></li>
        </ul>
      </div>

      <div className="profile-subsection">
        <h3>💬 Recent Activity</h3>
        <ul>
          <li>Chat with Architect Anna - 2 days ago</li>
          <li>Consultation booked with Designer Leo</li>
        </ul>
      </div>

      <div className="profile-subsection">
        <h3>⚙️ Preferences</h3>
        <ul>
          <li>Theme: Light</li>
          <li>Notifications: Enabled</li>
          <li>Language: English</li>
        </ul>
      </div>

      <div className="profile-subsection">
        <h3>🔒 Security</h3>
        <ul>
          <li>Password: ********</li>
          <li>2FA: Not Enabled</li>
        </ul>
        <button className="secondary-btn">Change Password</button>
        <button className="secondary-btn">Enable 2FA</button>
      </div>
    </div>
  );
};

export default Profile;
