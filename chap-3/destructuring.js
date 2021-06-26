function getEmployee(id) {
    return {
        name: 'John',
        age: 35,
        address: { street: '123 St',
            CP: 1234 },
        country: 'United States'
    };
}
var _a = getEmployee(22), fullName = _a.name, age = _a.age, address = _a.address;
console.log('employee', fullName, age, address);
