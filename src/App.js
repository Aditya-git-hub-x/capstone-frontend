
import {Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import ExpenseComponent from './components/ExpenseComponent';
import ListExpenseComponent from './components/ListExpenseComponent';
import Home from './components/Home'
import './App.css';







function App() {
  return (
    <div>
      
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = { <Home /> }></Route>
              <Route exact path = "/expense" element = { <ListExpenseComponent /> }></Route>
              <Route exact path = "/add-expense" element = { <ExpenseComponent /> }></Route>
              <Route path = "/employees" element = { <ListEmployeeComponent /> }></Route>
              <Route path = "/add-employee" element = { <EmployeeComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <EmployeeComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        
    </div>
  );
}

export default App;