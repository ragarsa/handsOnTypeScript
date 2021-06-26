namespace OptionalChaining {

    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels; 
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {}
    }
    
    

    const car: Automobile | null = new Automobile({
        count: undefined
    });

    const count = car?.wheels?.count ?? 0
    console.log("car", car);
    console.log("car", car?.wheels);
    console.log("car", car?.wheels?.count);
    console.log(count)


}