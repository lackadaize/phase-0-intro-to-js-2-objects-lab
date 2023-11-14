var employee = {
    name: "Tester McTesterthan",
    streetAddress: "123 Tester's Lane",
  };

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const updatedEmployee1 = {};
  
    for (let prop in employee) {

      updatedEmployee1[prop] = employee[prop];
    }
  
    updatedEmployee1[key] = value;
  
    return updatedEmployee1;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const updatedEmployee3 = {};
  
    for (let prop in employee) {

        if (prop !==key) {

            updatedEmployee3[prop] = employee[prop];
        }

    }
 
    return updatedEmployee3;
  }

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    
    return employee;
}
