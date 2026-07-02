import React, { createContext, useState, useEffect } from 'react';

// 1. Global Store create kar rahe hain
export const AuthContext = createContext();

// 2. Provider component jo pure app ko wrap karega
export const AuthProvider = ({ children }) => {
  // Login status aur user details ke liye states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Jab bhi app load ho, check karo ke kya user pehle se logged in tha (Local Storage se)
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');

    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser)); // String ko wapas object mein convert kar rahe hain
    }
  }, []);

  // Login Function: State aur Local Storage dono update karega
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('isAuthenticated', 'true');
    // Local storage mein direct object nahi rakh sakte, isliye JSON.stringify use hota hai
    localStorage.setItem('user', JSON.stringify(userData)); 
  };

  // Logout Function: State aur Local Storage dono se data clear karega
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  // Jo bhi data global karna hai, wo 'value' mein bhej dein
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};