const allTrucks: number[] = [2,3,4,10]

const initialCapacity:number = 10;

const allTonage: number = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity; 

    return totalCapacity;
}, initialCapacity);

console.log(allTonage);