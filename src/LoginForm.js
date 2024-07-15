import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (!userId.trim() || !password.trim()) {
      setError('Please enter both User ID and Password.');
      return;
    }

    // Simulate login (replace with actual authentication logic)
    // For demonstration, assume different roles based on userId
    let role = 'employee'; // Default role

    if (userId === 'manager' && password === 'managerpass') {
      role = 'manager';
    } else if (userId === 'employee' && password === 'employeepass') {
      role = 'employee';
    } else {
      setError('Invalid User ID or Password.');
      return;
    }

    // Pass the role to the parent component
    onLogin(userId, role);
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;