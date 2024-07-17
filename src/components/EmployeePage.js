import React from 'react'
import {useNavigate } from 'react-router-dom';
const EmployeePage = () => {

    const navigate = useNavigate()

    function addNewExpense() {
        navigate('/add-expense')   
    }
    
    return (
        <div>
            <button className = "btn btn-primary mb-2" onClick={addNewExpense }>Add Expense</button>
        </div>
    )
}

export default EmployeePage;