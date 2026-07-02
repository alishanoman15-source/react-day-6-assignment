import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  // States for form inputs and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Accessing the login function from our Global Context
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Form submit hone par page refresh hone se roknay ke liye
    
    // Dummy Authentication Logic (Sirf test karne ke liye)
    if (email === 'admin@dashboard.com' && password === 'admin123') {
      const userData = { 
        name: 'Alisha Admin', 
        email: email, 
        role: 'Administrator' 
      };
      
      login(userData); // Global state aur local storage dono update ho jayenge
      setError(''); // Clear any previous errors
      alert('Login Successful! Welcome to the Dashboard.');
    } else {
      setError('Invalid email or password. Use: admin@dashboard.com / admin123');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>
        <p style={styles.subtitle}>Enter your credentials to access the dashboard</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="admin@dashboard.com"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Show error message if login fails */}
          {error && <p style={styles.errorText}>{error}</p>}
          
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// Modern UI Styles object (Professional Theme)
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    margin: '0 0 10px',
    color: '#333',
    textAlign: 'center'
  },
  subtitle: {
    margin: '0 0 30px',
    color: '#666',
    textAlign: 'center',
    fontSize: '14px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
    fontWeight: '500',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
    fontSize: '15px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '10px'
  },
  errorText: {
    color: '#dc3545',
    fontSize: '13px',
    marginBottom: '15px',
    textAlign: 'center'
  }
};

export default Login;