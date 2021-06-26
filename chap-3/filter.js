var filterItems = [
    { name: 'jon', age: 20 },
    { name: 'eri', age: 32 },
    { name: 'liz', age: 24 }
];
var results = filterItems.filter(function (item, index) { return item.name === 'eri'; });
console.log(results);
