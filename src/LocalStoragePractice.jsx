import React, { useState, useEffect } from 'react';

const LocalStoragePractice = () => {
  // 1. State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. useEffect to check if the user is already logged in when the page loads
  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // 3. Function to handle login
  const handleLogin = () => {
    // Save data to Local Storage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', 'Alisha Noman'); // Saving user's name too
    setIsLoggedIn(true);
    alert('Logged in successfully!');
  };

  // 4. Function to handle logout
  const handleLogout = () => {
    // Remove data from Local Storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Local Storage Practice</h2>

      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <div style={{ backgroundColor: '#d4edda', padding: '15px', borderRadius: '5px' }}>
          <h3>Welcome, {localStorage.getItem('username')}!</h3>
          <button 
            onClick={handleLogout}
            style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{ backgroundColor: '#f8d7da', padding: '15px', borderRadius: '5px' }}>
          <h3>Please log in to continue.</h3>
          <button 
            onClick={handleLogin}
            style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default LocalStoragePractice;