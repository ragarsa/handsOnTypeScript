
/*
function getLength<T> (arg:T): number {
    
    if (arg.hasOwnProperty("length")) {
        return arg["length"];
    };

    return 0
}
*/

interface HasLenght {
    length: number
};

function getLength<T extends HasLenght> (arg:T): number {
    return arg.length;
}



// console.log(getLength<number>(22)); // // error constraining interface 
console.log(getLength("hello there"));
