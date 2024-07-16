import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import ListExpenseComponent from './ListExpenseComponent';



const Home = () => {

    const navigate = useNavigate()

    function addNewExpense() {
        navigate('/add-expense')   
    }
    function ListExpense() {
        navigate('/expense')   
    }
    function ListEmployee() {
        navigate('/employees')   
    }

    return (
        <div>
            <button className = "btn btn-primary mb-2" onClick={ListExpense }>List Expense</button>
            <button className = "btn btn-primary mb-2" onClick={ ListEmployee}>List Employee</button>
            <button className = "btn btn-primary mb-2" onClick={addNewExpense }>Add Expense</button>
        </div>
    )
}

export default Home