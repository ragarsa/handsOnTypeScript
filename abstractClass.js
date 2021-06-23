var AbstractClass;
(function (AbstractClass) {
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
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`);
        }
    }
    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(3);
    const automobile = new Automobile();
    automobile.showNumberOfWheels();
})(AbstractClass || (AbstractClass = {}));
