import React, { useState } from 'react';
import axios from 'axios';

// 1. Yahan onAdd prop receive kar rahe hain
const AddEmployee = ({ onAdd }) => {
  // States for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Creating a new employee object
    const newEmployee = {
      name: name,
      email: email,
      company: { name: company }
    };

    // Axios POST Request to send data
    axios.post('https://jsonplaceholder.typicode.com/users', newEmployee)
      .then((response) => {
        console.log("Server Response:", response.data);
        alert(`Success! Employee ${response.data.name} has been added.`);
        
        // 2. YEH NAYI LINE HAI: Dashboard ko naya data bhej do
        onAdd(response.data);
        
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setCompany('');
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Failed to add employee.");
      });
  };

  return (
    <div style={styles.formContainer}>
      <h3 style={styles.heading}>Add New Employee</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input} 
          required 
        />
        <input 
          type="text" 
          placeholder="Company Name" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          style={styles.input} 
          required 
        />
        <button type="submit" style={styles.button}>Add Employee</button>
      </form>
    </div>
  );
};

// CSS Styles for the Form
const styles = {
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    marginBottom: '30px'
  },
  heading: { marginTop: 0, color: '#333' },
  form: { display: 'flex', gap: '15px', flexWrap: 'wrap' },
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minWidth: '200px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    whiteSpace: 'nowrap'
  }
};

export default AddEmployee;