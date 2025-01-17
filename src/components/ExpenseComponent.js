import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createExpense, getExpenseById } from '../services/EmployeeService';

const ExpenseComponent = () => {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [eid, setEid] = useState('');
    const [bill, setBill] = useState(null); // State to hold the selected file
    const [billName, setBillName] = useState(''); // State to hold the file name

    const [typeError, setTypeError] = useState('');
    const [amountError, setAmountError] = useState('');
    const [eidError, setEidError] = useState('');

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
            switch (type) {
                case 'internet':
                    if (amount > 2000) {
                        setAmountError('Amount for internet cannot exceed 2000');
                        isValid = false;
                    }
                    break;
                case 'medical':
                    if (amount > 50000) {
                        setAmountError('Amount for medical cannot exceed 50000');
                        isValid = false;
                    }
                    break;
                case 'travel':
                    if (amount > 5000) {
                        setAmountError('Amount for travel cannot exceed 5000');
                        isValid = false;
                    }
                    break;
                default:
                    setAmountError('');
            }
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

        return isValid;
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setBill(file);
        setBillName(file.name); // Set the file name
    };

    const saveExpense = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const expense = { type, amount, eid, billName }; // Include billName in the expense object

        console.log(expense);

        createExpense(expense)
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
                    // Assuming the file name is stored in the database for editing purpose
                    setBillName(response.data.billName || ''); 
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
                                        className={`form-control `}
                                        onChange={handleFileChange}
                                    />
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
