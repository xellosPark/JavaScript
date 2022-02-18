const car ={
    whells : 4,
    drive(){
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    //wheels: 4,
    navigetion: 1,
    //drive(){
      //  console.log("drive..");
    //},
};

const benz = {
    color: "black",
    //wheels: 4,
    //drive(){
    //    console.log("drive..");
    //},
};

const audi = {
    color: "bule",
    //wheels: 4,
    //drive(){
    //    console.log("drive..");
    //},
};
// hasOwnProperty 상속 여부

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 ={
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;


// const car ={
//     whells : 4,
//     drive(){
//         console.log("drive..");
//     },
// };


const Bmw = function(color){
    this.color = color;
};

// 생성자
Bmw.prototype.whells = 4;
Bmw.prototype.driven = function(){
    console.log("drive..");
};

Bmw.prototype.navigetion = 1;
Bmw.prototype.stop = function(){
    console.log("STOP!");

}
// x5.__proto__ = car;
// z4.__proto__ = car;

// Bmw.prototype = {
//     constructor: bmw,
//     wheels: 4,
//     driven(){
//         console.log("drive..");
//     } 
//     navigator: 1,
//     stop(){
//         console.log("STOP!");
//     },
// };

const x5_1 = new Bmw("red");
const z4 = new Bmw("blue");


//instanceof (상속 여부)

//constructor 메서드는 [클래스]
//의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다. 
