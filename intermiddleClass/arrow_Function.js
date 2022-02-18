// 함수 표현식
// showError();
// let showError = function(){  // error 발생 함수 호출 시점 
//     console.log('error');
// }

// 함수 선언문
showError();
function showError() {
    console.log('error');
}

// 화살표 함수

let showError = () => {
    console.log('error');
}

const sayHelo = function (name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}

const sayHelo =  (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}