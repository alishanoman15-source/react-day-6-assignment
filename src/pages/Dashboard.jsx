import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import AddEmployee from '../components/AddEmployee';
import Profile from '../components/Profile'; 

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setEmployees(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // --- NAYA FUNCTION YAHAN ADD KIYA HAI ---
  // Yeh function naye employee ko purani list mein add karega
  const handleAddNewEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]); 
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Employee Portal</h2>
        <div style={styles.navRight}>
          <span style={styles.welcomeText}>Welcome, <strong>{user?.name}</strong></span>
          <button onClick={logout} style={styles.logoutBtn}>Logout</button>
        </div>
      </nav>

      <main style={styles.mainContent}>
        
        <Profile />
        {/* --- YAHAN NAYE FUNCTION KO FORM MEIN BHEJ RAHE HAIN --- */}
        <AddEmployee onAdd={handleAddNewEmployee} />

        <h3 style={styles.pageTitle}>Employee List</h3>
        
        {loading ? (
          <p>Loading employees data...</p>
        ) : (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHead}>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Company</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} style={styles.tableRow}>
                    <td style={styles.td}>{emp.id}</td>
                    <td style={styles.td}><strong>{emp.name}</strong></td>
                    <td style={styles.td}>{emp.email}</td>
                    <td style={styles.td}>{emp.company?.name || emp.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f4f7fa',
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0056b3',
    color: 'white',
    padding: '15px 30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logo: { margin: 0 },
  navRight: { display: 'flex', alignItems: 'center', gap: '20px' },
  welcomeText: { fontSize: '15px' },
  logoutBtn: {
    padding: '8px 15px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  mainContent: { padding: '30px' },
  pageTitle: { color: '#333', marginBottom: '20px' },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    overflow: 'hidden' 
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHead: { backgroundColor: '#e9ecef', color: '#495057', textAlign: 'left' },
  th: { padding: '15px', borderBottom: '2px solid #dee2e6' },
  tableRow: { borderBottom: '1px solid #dee2e6' },
  td: { padding: '15px', color: '#333' }
};

export default Dashboard;