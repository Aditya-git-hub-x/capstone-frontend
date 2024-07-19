import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, getAllExpenseByEid } from '../services/EmployeeService';

const EmployeePage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    
    const [expenses, setExpenses] = useState([]);

    const navigate = useNavigate()
    const { id } = useParams();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        gap: '20px',
        borderRadius: '10px',
    };

    const columnStyle = {
        flex: '1',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    function addNewExpense() {
        navigate('/add-expense')   
    }

    useEffect(() => {

        if(id){
            getEmployeeById(id).then((response) =>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setMobile(response.data.mobile)
                //console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
            getAllExpenseByEid(id).then((response) =>{
                setExpenses(response.data)
                //console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    
    return (
        <div style={containerStyle}>
            <div style={columnStyle}>
            <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Employee Details</h1>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Last Name:</strong> {lastName}</p>
                    <p><strong>Mobile:</strong> {mobile}</p>
                    <p><strong>Email:</strong> {email}</p></div>
            </div>
            </div>
        </div>
        <div style={columnStyle}>
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
        </div>
        </div>
    )
}

export default EmployeePage;