const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return { ...employeeObj, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
    let newEmployee = { ...employeeObj };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
}
