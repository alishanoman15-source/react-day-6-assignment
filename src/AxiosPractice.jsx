import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPractice = () => {
  // 1. States to store the fetched users and any potential errors
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // 2. useEffect to trigger the API call as soon as the component mounts
  useEffect(() => {
    // GET Request: Fetching data from the server
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError('Failed to fetch data!'));
  }, []);

  // 3. Function to handle sending data to the server
  const handleAddUser = () => {
    // Mock data for the new user
    const newUser = {
      name: 'Alisha Noman',
      email: 'alisha@gmail.com.com'
    };

    // POST Request: Sending new data to the server
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then((response) => {
        // The server usually responds with the newly created object (including a new ID)
        console.log("New user added! Server response:", response.data);
        alert(`User ${response.data.name} added successfully!`);
      })
      .catch((err) => {
        console.log("Error in POST request:", err);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Axios Practice: GET & POST</h2>
      
      {/* Button to trigger the POST request */}
      <button 
        onClick={handleAddUser} 
        style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', marginBottom: '20px' }}
      >
        Add New User
      </button>

      {/* Display error message if the GET request fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Map through the users array and display them */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosPractice;