'use strict';

//1. class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const park = new Person('park', 30);
console.log(park.name);
console.log(park.age);
park.speak();

// 2. getter and setters
class User {
    constructor(firesName, lastName, age){
        this.firesName =  firesName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0 ) {
        //     throw Error('age can not be negative');
        // }
        //this._age = value;
        this._age = value < 0 ? 0: value;

    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

//5. iNHERITANCE
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`park ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

// 상속
class Rectangle extends Shape {}
class Triangle extends Shape {
    //overriding
    draw(){
        // (super) 부모 함수 실행
        super.draw();
        console.log(`🔺`);
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20,20,`blue`);
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());


//6. class checking: instanceOF
//instanceof -> 부모에 포함확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

