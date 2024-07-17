import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gpnId, setGpnId] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [gpnIdError, setGpnIdError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        if (!firstName) {
            setFirstNameError('First Name is required');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        if (!lastName) {
            setLastNameError('Last Name is required');
            isValid = false;
        } else {
            setLastNameError('');
        }

        if (!gpnId || !/^\d+$/.test(gpnId)) {
            setGpnIdError('GPN Id must be a number');
            isValid = false;
        } else {
            setGpnIdError('');
        }

        if (!mobile || !/^\d{10}$/.test(mobile)) {
            setMobileError('Mobile Number must be a 10-digit number');
            isValid = false;
        } else {
            setMobileError('');
        }

        if (!email || !email.endsWith('@ey.com')) {
            setEmailError('Email must end with @ey.com');
            isValid = false;
        } else {
            setEmailError('');
        }

        return isValid;
    };

    const saveEmployee = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const employee = {
            firstName,
            lastName,
            gpnId,
            mobile,
            email
        };
        alert('Form submitted successfully!'); // Show alert message

        console.log(employee);

        createEmployee(employee)
            .then((response) => {
                console.log(response.data);
                
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const pageTitle = () => {
        return <h2 className="text-center">Add Employee</h2>;
    };

    return (
        <div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {pageTitle()}
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">First Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className={`form-control ${firstNameError ? 'is-invalid' : ''}`}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className={`form-control ${lastNameError ? 'is-invalid' : ''}`}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">GPN Id:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter GPN Id"
                                        name="gpnId"
                                        className={`form-control ${gpnIdError ? 'is-invalid' : ''}`}
                                        value={gpnId}
                                        onChange={(e) => setGpnId(e.target.value)}
                                    />
                                    {gpnIdError && <div className="invalid-feedback">{gpnIdError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Mobile Number:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter mobile number"
                                        name="mobile"
                                        className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                    {mobileError && <div className="invalid-feedback">{mobileError}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;

