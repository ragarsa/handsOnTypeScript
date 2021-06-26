interface Persons {
    name:string; 
    age:number; 
}

const items: Array<Persons> = [
    {name: "jon", age: 20}, 
    {name: "raul", age: 29}, 
    {name: "erikc", age: 27}, 
]

const jon: Persons | undefined = items.find(items => items.name === 'jon');

console.log(jon);