function runMore(distance:number): number {
    return distance + 10;
}

console.log(runMore(10));


function eat(calories: number) {
    console.log(" I ate " + calories + "calories");
}

function sleepIn(hours:number): void {
    console.log("I slept", hours);
}

let ate = eat(100); //I  ate 100 calories //Undefined
console.log(ate);
let slept = sleepIn(7);
console.log(slept); //I slept 7 hours //Undefined