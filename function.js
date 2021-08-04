

//1. Parmetrs
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const park = {name: 'park'};
changeName(park);
console.log(park);

// 3. Default parameters (added in ES6)
function showMessage(message, from){
  // ES6 이전
    // if(from === undefined){
    //     from = `unknown`;
    // }
    console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);

// 4. Rest parameters (added in ES6)
// ... -> 배열인식
function printAll(...args) {
    for (let i  = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','park');

//5. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);
console.log(`sum: ${result}`);

//6
const print = function() {
    console.log('test');
};
print();
const printAgin = print;
printAgin();
const sumAgin = sum;
console.log(sumAgin(1,3));


// 7.Callback function using function expression
function rendomQuiz(answer, printYes, printon){
    if (answer === 'love you'){
        printYes();
    } else {
        printon();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
// better devugging in debugger`s stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};

rendomQuiz('wrong',printYes,printNo);
rendomQuiz('love you',printYes,printNo);

// Arrow function 
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint1 = () => console.log(`simplePrint!`);
const add = (a,b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately  Invoked Function Expression
// 함수 바로 선언과 동시에 실행
(function hello() {
    console.log('IIFE');
})();