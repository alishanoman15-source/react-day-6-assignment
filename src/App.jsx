import React, { useContext } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Naya Dashboard import kar liya
import { AuthContext } from './context/AuthContext';

function App() {
  // Context API se check kar rahe hain ke user logged in hai ya nahi
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {/* Agar logged in nahi hai toh Login dikhao, warna Dashboard dikhao */}
      {!isAuthenticated ? <Login /> : <Dashboard />}
    </div>
  );
}

export default App;