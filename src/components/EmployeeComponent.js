import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { createEmployee} from '../services/EmployeeService';

const EmployeeComponent = () => {

    const [name, setName] = useState('')
    const [id, setid] = useState('')

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {id, name}

        console.log(employee);
        createEmployee(employee).then((response) =>{

            console.log(response.data)

            navigate('/');

        }).catch(error => {
            console.log(error)
        })
        
    }

    

    const pageTitle = () => {

        return <h2 className = "text-center">Add Employee</h2>
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter id"
                                        name = "id"
                                        className = "form-control"
                                        value = {id}
                                        onChange = {(e) => setid(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveEmployee(e)} >Submit </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default EmployeeComponent