// src/components/Dashboard.js

import React from 'react';
import ListEmployeeComponent from './ListEmployeeComponent';
import ListExpenseComponent from './ListExpenseComponent';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ListEmployeeComponent />
        </div>
        <div className="col-md-6">
          <ListExpenseComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
