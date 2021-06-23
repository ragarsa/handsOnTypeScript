//It defines by type

type Points = 20 | 30 | 40 | 50; 
let score: Points = 20; 
console.log(score);


//a bit complex

type ComplexPerson = {
    name:string, 
    age:number, 
    birthday: Date, 
    married: boolean, 
    address: string
};



let person: ComplexPerson = {
    name: 'Raul',
    age: 29, 
    birthday: new Date(),
    married: false, 
    address: 'Some street'
}
console.log(person);
