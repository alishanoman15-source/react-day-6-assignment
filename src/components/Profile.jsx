import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  // Context API se user ki details nikal rahe hain
  const { user } = useContext(AuthContext);

  return (
    <div style={styles.profileCard}>
      {/* Avatar (Naam ka pehla harf show karega) */}
      <div style={styles.avatar}>
        {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
      </div>
      
      {/* User Details */}
      <div style={styles.info}>
        <h3 style={styles.name}>{user?.name || 'Admin User'}</h3>
        <p style={styles.text}><strong>Email:</strong> {user?.email}</p>
        <p style={styles.text}><strong>Role:</strong> {user?.role || 'Administrator'}</p>
      </div>
    </div>
  );
};

// Professional CSS Styles for Profile Card
const styles = {
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    marginBottom: '30px',
    gap: '20px'
  },
  avatar: {
    width: '65px',
    height: '65px',
    backgroundColor: '#0056b3',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  info: { display: 'flex', flexDirection: 'column', gap: '5px' },
  name: { margin: 0, color: '#333', fontSize: '22px' },
  text: { margin: 0, color: '#666', fontSize: '15px' }
};

export default Profile;