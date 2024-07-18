import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {listEmployees, deleteEmployee} from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const removeEmployee = (employeeId) => {
       deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }


    return (
        <div className = "container">
            <br /><br />
            <h2 className = "text-center"> Employees List</h2>
            {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>   
                    <tr>
                        <th> Employee Id </th>
                        <th> Employee First Name </th>
                        <th> Employee Last Name </th>
                        <th> Mobile </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.mobile} </td>
                                <td> {employee.email} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent