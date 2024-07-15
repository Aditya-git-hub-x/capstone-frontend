import React from 'react';

const ManagerPage = ({ username }) => {
  return (
    <div>
      <h1>Welcome, Manager {username}!</h1>
      <p>Manager Dashboard</p>
    </div>
  );
};

export default ManagerPage;