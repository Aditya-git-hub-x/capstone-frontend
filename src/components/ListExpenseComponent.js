import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listExpenses } from '../services/EmployeeService'; // Assuming you have a service for expense operations

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

    

    const addNewExpense = () => {
        navigate('/add-expense');
    };

    const editExpense = (expenseId) => {
        navigate(`/edit-expense/${expenseId}`);
    };

    return (
        <div className="container">
            <br />
            <br />
            <h2 className="text-center">Expenses List</h2>
            <div className="text-end mb-2">
                <button className="btn btn-primary" onClick={addNewExpense}>
                    Add Expense
                </button>
            </div>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Expense ID</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Employee ID</th>
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
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() => editExpense(expense.id)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListExpenseComponent;
