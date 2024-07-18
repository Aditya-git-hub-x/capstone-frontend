import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/EmployeeService';

const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {
      event.preventDefault();

      getEmployeeById(userId).then((response) =>{
          console.log(response.data)
      }).catch(error => {
          console.log(error)
      })

        // Basic validation
        if (!userId.trim() || !password.trim()) {
            setError('Please enter both User ID and Password.');
            return;
        }

        // Simulate login (replace with actual authentication logic)
        let role = 'employee'; // Default role

        if (password === 'managerpass') {
            role = 'manager';
        } else if (password === 'employeepass') {
            role = 'employee';
        } else {
            setError('Invalid User ID or Password.');
            return;
        }

        // Navigate based on role
        if (role === 'manager') {
            navigate(`/manager`);
        } else {
            navigate(`/employee/${userId}`);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>User ID:</label>
                        <input
                            type="number"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            required
                        />
                    </div>

                    {error && <p style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>{error}</p>}

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Login
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
                    New user? <Link to="/add-employee" style={{ color: '#007bff', textDecoration: 'none' }}>Register Employee</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;

