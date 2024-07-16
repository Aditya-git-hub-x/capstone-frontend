import axios from 'axios';

const url = 'http://localhost:8090';
//http://localhost:8085/api/v1/employees

export const listEmployees = async ()=>{
    const response = await axios.get(url+'/emp');
   
    return response;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(url+'/emp', employee);
    return response;
}

export const getEmployeeById = async (employeeId) => {
    const response = await axios.get(url + '/emp' + employeeId);
    return response;
}

export const updateEmployee = async (employeeId, employee) => {
    const response = await axios.put(url + '/emp' +employeeId, employee);
    return response;
}

export const deleteEmployee = async (employeeId) => {
    const response = await axios.delete(url + '/emp' + employeeId);
    return response;
}

export const createExpense = async (expense) => {
    const response = await axios.post(url+'/exp', expense);
    return response;
}

export const getExpenseById = async (exid) => {
    const response = await axios.get(url + '/emp' + exid);
    return response;
}

export const listExpenses = async ()=>{
    const response = await axios.get(url+'/exp');
    return response;
};