import React from 'react';

const EmployeePage = ({ username }) => {
  return (
    <div>
      <h1>Welcome, Employee {username}!</h1>
      <p>Employee Dashboard</p>
    </div>
  );
};

export default EmployeePage;