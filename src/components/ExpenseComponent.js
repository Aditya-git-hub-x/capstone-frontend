import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createExpense, getExpenseById } from '../services/EmployeeService';

const ExpenseComponent = () => {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [eid, setEid] = useState('');
    const [bill, setBill] = useState(null); // State to hold the selected file

    const [typeError, setTypeError] = useState('');
    const [amountError, setAmountError] = useState('');
    const [eidError, setEidError] = useState('');
    const [billError, setBillError] = useState('');

    const navigate = useNavigate();
    const { exid } = useParams();

    const validateForm = () => {
        let isValid = true;

        if (!type) {
            setTypeError('Type is required');
            isValid = false;
        } else {
            setTypeError('');
        }

        if (!amount) {
            setAmountError('Amount is required');
            isValid = false;
        } else if (isNaN(amount) || amount <= 0) {
            setAmountError('Amount must be a valid number greater than 0');
            isValid = false;
        } else {
            setAmountError('');
        }

        if (!eid) {
            setEidError('Employee ID is required');
            isValid = false;
        } else if (isNaN(eid) || eid <= 0) {
            setEidError('Employee ID must be a valid number greater than 0');
            isValid = false;
        } else {
            setEidError('');
        }

        if (!bill) {
            setBillError('Bill image is required');
            isValid = false;
        } else {
            setBillError('');
        }

        return isValid;
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBill(file);
    };

    const saveExpense = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = new FormData();
        formData.append('type', type);
        formData.append('amount', amount);
        formData.append('eid', eid);
        formData.append('bill', bill);

        console.log(formData);

        createExpense(formData)
            .then((response) => {
                console.log(response.data);
                navigate('/');
                window.alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (exid) {
            getExpenseById(exid)
                .then((response) => {
                    setType(response.data.type);
                    setAmount(response.data.amount);
                    setEid(response.data.eid);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [exid]);

    const pageTitle = () => {
        return <h2 className="text-center">{exid ? 'Edit Expense' : 'Add Expense'}</h2>;
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
                                <div className="form-group">
                                    <label className="form-label">Type:</label>
                                    <select
                                        className={`form-control ${typeError ? 'is-invalid' : ''}`}
                                        value={type}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                            setTypeError('');
                                        }}
                                    >
                                        <option value="">Select type</option>
                                        <option value="internet">Internet</option>
                                        <option value="travel">Travel</option>
                                        <option value="medical">Medical</option>
                                    </select>
                                    {typeError && <div className="text-danger">{typeError}</div>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Amount:</label>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        name="amount"
                                        className={`form-control ${amountError ? 'is-invalid' : ''}`}
                                        value={amount}
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                            setAmountError('');
                                        }}
                                    />
                                    {amountError && <div className="text-danger">{amountError}</div>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Employee ID:</label>
                                    <input
                                        type="number"
                                        placeholder="Enter employee ID"
                                        name="eid"
                                        className={`form-control ${eidError ? 'is-invalid' : ''}`}
                                        value={eid}
                                        onChange={(e) => {
                                            setEid(e.target.value);
                                            setEidError('');
                                        }}
                                    />
                                    {eidError && <div className="text-danger">{eidError}</div>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Bill Image:</label>
                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg"
                                        name="bill"
                                        className={`form-control ${billError ? 'is-invalid' : ''}`}
                                        onChange={handleFileChange}
                                    />
                                    {billError && <div className="text-danger">{billError}</div>}
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveExpense(e)}>
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

export default ExpenseComponent;

