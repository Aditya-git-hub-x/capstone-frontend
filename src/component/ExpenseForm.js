
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [expenses, setExpenses] = useState([{eid: '', type: '', amount: '', bill: null }]);
  const [errors, setErrors] = useState([]);

  const handleChange = (index, event) => {
    const { name, value, files } = event.target;
    const newExpenses = [...expenses];
    if (name === 'bill') {
      newExpenses[index][name] = files[0];
    } else {
      newExpenses[index][name] = value;
    }
    setExpenses(newExpenses);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { eid: '', type: '', amount: '', bill: null }]);
  };

  const handleRemoveExpense = (index) => {
    const newExpenses = expenses.filter((expense, i) => i !== index);
    setExpenses(newExpenses);
  };

  const validateExpenses = () => {
    const newErrors = [];
    expenses.forEach((expense, index) => {
      if (!/^\d+$/.test(expense.eid)) {
        newErrors.push(`Employee ID  ${index + 1} should contain only numbers.`);
      }
      if (!['medical', 'travel', 'internet'].includes(expense.type.toLowerCase())) {
        newErrors.push(`Type of Expense at index ${index + 1} should be either Medical, Travel, or Internet.`);
      }
      if (!/^\d+(\.\d{1,2})?$/.test(expense.amount)) {
        newErrors.push(`Amount at index ${index + 1} should only contain numbers.`);
      }
    });
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateExpenses()) {
      console.log('Expenses submitted: ', expenses);
      // Here you can add code to send the data to a backend server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <div key={index} className="error">{error}</div>
          ))}
        </div>
      )}
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          
          <div className="form-group">
            <label htmlFor={`eid-${index}`}>Employee ID:</label>
            <input
              type="text"
              id={`eid-${index}`}
              name="eid"
              value={expense.eid}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`type-${index}`}>Type of Expense:</label>
            <select
              id={`type-${index}`}
              name="type"
              value={expense.type}
              onChange={(e) => handleChange(index, e)}
              required
            >
              <option value="">Select type</option>
              <option value="medical">Medical</option>
              <option value="travel">Travel</option>
              <option value="internet">Internet</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor={`amount-${index}`}>Amount:</label>
            <input
              type="number"
              id={`amount-${index}`}
              name="amount"
              value={expense.amount}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`bill-${index}`}>Bill:</label>
            <input
              type="file"
              id={`bill-${index}`}
              name="bill"
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <button type="button" className="btn btn-remove" onClick={() => handleRemoveExpense(index)}>Remove</button>
        </div>
      ))}
      <button type="button" className="btn btn-add" onClick={handleAddExpense}>Add Expense</button>
      <button type="submit" className="btn btn-submit">Submit Expenses</button>
    </form>
  );
};

export default ExpenseForm;























