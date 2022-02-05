// var는 한번 선언된 변수를 다시 선언할 수 있다.
var name = 'Mike';
console.log(name);

var name = 'Jane';
console.log(name);

//호이스팅(hoisting)
//스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

var name; //호이스팅(hoisting)
console.log(name); //var 선언 가능 undefined
name = 'Mike';

// TDZ(Temporal Dead Zone) 
// 오류 발생 Uncaught ReferenceError: Cannot access 'name2' before initialization
//let 선언은 console.log(name2); 선언 전 사용 못함
let name2 = 'Mike';
console.log(name2);

let age = 30;
function showAge(){
    console.log(age);
    //let age = 20; 문제발생
};
showAge();

// let : 블록 스코프(block-scoped) 함수, if,for.while, try/catch 문
// 변수의 생성과정
// 1.선언 단계 
// 2.초기화 단계
// 3.할당 단계

// var : 함수 스코프(function-scoped) 
// 변수의 생성과정
// 1.선언 단계 및 초기화 단계
// 2.할당 단계
// 예)var 가능 
const tage = 30;
if(tage > 19){
     var txt = '성인';
}
console.log(txt);
//예)var 함수에서 불가능
//function add(num1, num2){
//   var result = num1 + num2;
//}
//add(2,3);
//console.log(result);

// const 
// 1. 선언 + 초기화 + 할당
// const gender; // 오류 발생 Uncaught SyntaxError: Missing initializer in const declaration
//gender = 'male';

