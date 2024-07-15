/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import ExpenseForm from './component/ExpenseForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Expense Form</h1>
      </header>
      <ExpenseForm />
    </div>
  );
}

export default App;

