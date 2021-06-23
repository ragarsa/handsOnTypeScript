class Vehicle {
    constructor(wheelCount) {
        this.wheelCount = wheelCount;
    }
    showNumberOfWheels() {
        console.log(`moved ${this.wheelCount} miles`);
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(2);
    }
}
class Automobile extends Vehicle {
    constructor() {
        super(4);
    }
}
const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
