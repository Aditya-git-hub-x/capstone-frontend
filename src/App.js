
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginForm from './components/LoginForm';
import EmployeePage from './components/EmployeePage';
import ManagerPage from './components/ManagerPage';
import EmployeeComponent from './components/EmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ExpenseComponent from './components/ExpenseComponent';
import ListExpenseComponent from './components/ListExpenseComponent';
import './App.css';

const App = () => {
  return (
  
    <>
    <HeaderComponent/>
    <div className='Container'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route exact path="/expense" element={<ListExpenseComponent />} />
          <Route exact path="/add-expense" element={<ExpenseComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          
        </Routes>
      </div>
      <FooterComponent/>
      </>
  
  );
};

export default App;