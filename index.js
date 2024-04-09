// Write your solution in this file!

// helpers.js

let employee = {
    name: 'Ryan Mwangi',
    streetAddress: '926 Main Street'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
