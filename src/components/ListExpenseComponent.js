import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listExpenses, updateExpenseApprove, updateExpenseReject } from '../services/EmployeeService';

const ListExpenseComponent = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllExpenses();
  }, []);

  const getAllExpenses = () => {
    listExpenses()
      .then((response) => {
        setExpenses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rejectExpense = (expenseId) => {
    const remarks = prompt('Please enter remarks for rejection:');
    if (remarks === null || remarks.trim() === '') {
      alert('Remarks are required for rejection.');
      return;
    }
    
    updateExpenseReject(expenseId, remarks)
      .then((response) => {
        getAllExpenses();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const approveExpense = (expenseId) => {
    updateExpenseApprove(expenseId)
      .then((response) => {
        getAllExpenses();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewExpense = () => {
    navigate('/add-expense');
  };

  return (
    <div className="mt-4">
      <h2 className="text-center">Expenses List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Exp ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Emp ID</th>
            <th>Status</th>
            <th>Document</th> {/* New column for Document */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.exid}>
              <td>{expense.exid}</td>
              <td>{expense.type}</td>
              <td>{expense.amount}</td>
              <td>{expense.eid}</td>
              <td>{expense.status}</td>
              <td>{expense.billName}</td> {/* Display billName as Document */}
              <td>
                <button className="btn btn-info" onClick={() => approveExpense(expense.exid)}>
                  Approve
                </button>
                <button className="btn btn-danger" onClick={() => rejectExpense(expense.exid)} style={{ marginLeft: '10px' }}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-primary" onClick={addNewExpense}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ListExpenseComponent;
