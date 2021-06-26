namespace GenericNamespace {

    interface Wheels {
        count: number;
        diameter: number; 
    }

    interface Vehicle <T>  {
        getName(): string;
        getWheelCount: () => T; 
    }

    //Wheel is generic as type

    abstract class Automobile implements Vehicle <Wheels> {
        
        constructor(private name: string, private wheels: Wheels) {}
        
        getName() : string {
            return this.name 
        };

        getWheelCount(): Wheels {
            return this.wheels
        }

    }

    class Chevy extends Automobile {
        constructor(name:string, wheel: Wheels) {
            super(name, wheel);
        }
    }

    const chevy = new Chevy ("Chevy", {count:4, diameter: 18}); 
    console.log("car name", chevy.getName());
    console.log("wheels", chevy.getWheelCount());

}