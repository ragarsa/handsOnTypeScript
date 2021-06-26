namespace AbstractClass {
    abstract class Vehicle {
        constructor(protected wheelCount:number){}

        abstract updateWheelCount(newWheelCount:number):void;

        showNumberOfWheels():void {
            console.log(`moved ${this.wheelCount} miles`);
        }

    }

    class Motorcycle extends Vehicle {
        constructor() {
            super(2)
        }
        updateWheelCount(newWheelCount:number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`)
        }
    }

    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount:number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`)
        }

        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`)
        }
    }

    const motorCycle = new Motorcycle(); 
    motorCycle.updateWheelCount(3);
    const automobile = new Automobile(); 
    automobile.showNumberOfWheels();

}

