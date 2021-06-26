const items = [
    { name: "jon", age: 20 },
    { name: "raul", age: 29 },
    { name: "erikc", age: 27 },
];
const jon = items.find(items => items.name === 'jon');
console.log(jon);
