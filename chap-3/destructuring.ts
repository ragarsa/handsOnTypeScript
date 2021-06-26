function getEmployee<T>(id:number) {

    return {
        name: 'John',
        age: 35,
        address: {street: '123 St',
                    CP: 1234},
        country: 'United States'
    }
}



const { name: fullName, age, address } = getEmployee(22);
console.log('employee', fullName, age, address);