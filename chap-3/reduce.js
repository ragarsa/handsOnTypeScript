var allTrucks = [2, 3, 4, 10];
var initialCapacity = 10;
var allTonage = allTrucks.reduce(function (totalCapacity, currentCapacity) {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);
console.log(allTonage);
