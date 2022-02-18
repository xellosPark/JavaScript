const Uesr = function (name, age){
    this.name = name;
    this.age  = age;
    this.showName = function() {
        console.log(this.name);
    };
};
const mike = new Uesr('Mike', 30);

class User2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}
const tom = new User2("Tom",19);

// extends
class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}
// 상속
class Bmw extends Car{
    //constructor(...args){
        //super(...args);
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    stop(){
        super();
        // super.stop();
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");
