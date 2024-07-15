import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Correct import

import LoginForm from './LoginForm';
import ManagerPage from './ManagerPage';
import EmployeePage from './EmployeePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (userId, userRole) => {
    setUsername(userId);
    setRole(userRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setRole('');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? (
                role === 'manager' ? (
                  <ManagerPage username={username} />
                ) : (
                  <EmployeePage username={username} />
                )
              ) : (
                <LoginForm onLogin={handleLogin} />
              )}
            </Route>
          </Switch>
          {isLoggedIn && (
            <button onClick={handleLogout}>Logout</button>
          )}
        </header>
      </div>
    </Router>
  );
};

export default App;