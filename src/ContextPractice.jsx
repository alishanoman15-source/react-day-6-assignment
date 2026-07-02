import React, { useState, createContext, useContext } from 'react';

// 1. Create the Context (Global Store ban gaya)
// Isey component ke bahar banate hain
const UserContext = createContext();

// ==========================================
// CHILD COMPONENT (Yeh component neechy hai)
// ==========================================
const UserProfile = () => {
  // 3. Consume the Context (Data direct nikal liya, bina props ke)
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ border: '2px solid #007bff', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
      <h3>Child Component (User Profile)</h3>
      <p>Current User: <strong>{user}</strong></p>
      
      {/* Button click hone par global state update hogi */}
      <button 
        onClick={() => setUser('Admin Alisha')}
        style={{ padding: '8px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Make me Admin
      </button>
    </div>
  );
};

// ==========================================
// PARENT COMPONENT (Yeh main component hai)
// ==========================================
const ContextPractice = () => {
  // Yeh state hum global store mein bhejenge
  const [user, setUser] = useState('Guest User');

  return (
    // 2. Provider (Store ko provide kar rahe hain)
    // Jo bhi value={{}} mein denge, wo andhar sab components ko mil jayegi
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ border: '2px solid #28a745', padding: '20px', borderRadius: '5px' }}>
        <h2>Parent Component (Context API)</h2>
        <p>Yeh parent hai. Data yahan se direct child ko ja raha hai.</p>
        
        {/* Dekhein hum yahan koi props (user={user}) pass nahi kar rahe! */}
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
};

export default ContextPractice;