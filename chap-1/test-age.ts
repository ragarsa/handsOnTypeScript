interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("user is", usr.name)

    if(usr.age >= 16) {
        console.log('Allow to drive')
    } else {console.log('Do not allow to drive :(')}
    
};

const tom: User = {
    name: "tom",
    age: 25
}

canDrive(tom);