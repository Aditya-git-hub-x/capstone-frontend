import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate()

    function addNewEmployee() {
        navigate('/add-employee')
      
}

    return (
        <div>
            <button className = "btn btn-primary mb-2" onClick={addNewEmployee }>Add Employee</button>
        </div>
    )
}

export default Login