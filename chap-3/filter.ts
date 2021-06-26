type CharacterFilter = {
    name:string, 
    age: number
}

const filterItems: Array<CharacterFilter> = [
    {name: 'jon', age:20},
    {name: 'eri', age:32},
    {name: 'liz', age:24}
]

const results = filterItems.filter((item, index) => {return item.name === 'eri'});

console.log(results);