import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/EmployeeService';

const EmployeePage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    const { id } = useParams();

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
        }

    }, [id])
    
    return (
        <div>
            <button className = "btn btn-primary mb-2" onClick={addNewExpense }>Add Expense</button>
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
    )
}

export default EmployeePage;