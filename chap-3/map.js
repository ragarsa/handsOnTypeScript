var employees = [
    { name: 'tim', id: 1 },
    { name: 'snou', id: 2 },
    { name: 'rock', id: 3 }
];
var elements = employees.map(function (item, index) {
    return "<div>" + item.id + "- " + index + "</div>";
});
console.log(elements);
