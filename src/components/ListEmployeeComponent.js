import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log('Error fetching employees:', error);
            });
    };

    const removeEmployee = (employeeId) => {
        deleteEmployee(employeeId)
            .then(() => {
                getAllEmployees(); // Refresh the employee list after deletion
            })
            .catch((error) => {
                console.log('Error deleting employee:', error);
            });
    };

    const addNewEmployee = () => {
        navigate('/add-employee'); // Navigate to add employee page
    };

    return (
        <div className="mt-4"> {/* Added top margin to move the component up */}
             
        
            <h2 className="text-center">Employees List</h2>
           
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Emp ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
