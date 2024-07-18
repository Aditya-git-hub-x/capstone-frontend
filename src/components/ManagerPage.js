import React, { useState } from 'react';
import ListExpenseComponent from './ListExpenseComponent';
import ListEmployeeComponent from './ListEmployeeComponent';
import ExpenseComponent from './ExpenseComponent';

const ManagerPage = () => {
    const [showAddExpense, setShowAddExpense] = useState(false);

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

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    };

    const headerStyle = {
        color: '#333333',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const formStyle = {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    };

    const inputStyle = {
        marginBottom: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={columnStyle}>
                
                <ListEmployeeComponent />
            </div>
            <div style={columnStyle}>
                
                <div style={buttonContainerStyle}>

                </div>
                {showAddExpense && (
                    <div style={formStyle}>
                        <ExpenseComponent inputStyle={inputStyle} />
                    </div>
                )}
                <ListExpenseComponent />
            </div>
        </div>
    );
};

export default ManagerPage;
