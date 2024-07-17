import React, { useState } from 'react';
import ListExpenseComponent from './ListExpenseComponent';
import ListEmployeeComponent from './ListEmployeeComponent';
import ExpenseComponent from './ExpenseComponent';

const ManagerPage = () => {
    const [currentView, setCurrentView] = useState(''); // State to track the current view

    return (
        <div>
            <button className="btn btn-primary mb-2" onClick={() => setCurrentView('listExpense')}>List Expense</button>
            <button className="btn btn-primary mb-2" onClick={() => setCurrentView('listEmployee')}>List Employee</button>
            <button className="btn btn-primary mb-2" onClick={() => setCurrentView('addExpense')}>Add Expense</button>

            {currentView === 'listExpense' && <ListExpenseComponent />}
            {currentView === 'listEmployee' && <ListEmployeeComponent />}
            {currentView === 'addExpense' && <ExpenseComponent />}
        </div>
    );
};

export default ManagerPage;