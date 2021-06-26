var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA" + ClassA.typeName;
    };
    return ClassA;
}());
// const a = new ClassA(); 
// console.log(ClassA.typeName); 
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunTypeName);
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.printX = function () {
        console.log(MyClass.x);
    };
    MyClass.x = 0;
    return MyClass;
}());
console.log(MyClass.x);
MyClass.printX();
