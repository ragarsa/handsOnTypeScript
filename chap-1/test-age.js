function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log('Allow to drive');
    }
    else {
        console.log('Do not allow to drive :(');
    }
}
;
var tom = {
    name: "tom",
    age: 25
};
canDrive(tom);
