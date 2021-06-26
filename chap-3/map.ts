interface Character {
    name: string;
    id: number;
}


const employees: Array<Character> = [
    {name: 'tim', id:1},
    {name: 'snou', id:2},
    {name: 'rock', id:3}
];

const elements = employees.map((item, index) => {
    return `<div>${item.id}- ${index}</div>`
})

console.log(elements);