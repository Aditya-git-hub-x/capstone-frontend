import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (!userId.trim() || !password.trim()) {
      setError('Please enter both User ID and Password.');
      return;
    }

    // Simulate login (replace with actual authentication logic)
    let role = 'employee'; // Default role

    if (userId === 'manager' && password === 'managerpass') {
      role = 'manager';
    } else if (userId === 'employee' && password === 'employeepass') {
      role = 'employee';
    } else {
      setError('Invalid User ID or Password.');
      return;
    }

    // Navigate based on role
    if (role === 'manager') {
      navigate('/manager');
    } else {
      navigate('/employee');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;