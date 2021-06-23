// class Person {
//     constructor() {}
//     msg: string; 
//     speak() {
//         console.log(this.msg);
//     }
// };

// const tom = new Person(); 
// tom.msg = "hello";
// tom.speak();


//Access modifiers with readonly you cant modify this.msg
class Person {
    constructor(private msg: string) {}
    speak() {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
    
};

const tom = new Person ('hello');
//tom.msg="hello" //error
tom.speak();
