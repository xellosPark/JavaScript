'use strict';

// JavaScript is synchronous. 
// Execute the code block by orger after hoisting.
// 동기와 비동기
// hoisting: var, function declaration

//Synchronous callback
// 동기화
function printImmediately(print){
    print();
}

// Asynchronous callback
// 비동기
function printWithDeley(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1');// 동기
setTimeout(() => console.log('2'), 1000);//비동기
console.log('3');// 동기


printImmediately(() => console.log('hello')); // 동기
printWithDeley(() => console.log('async callback'),2000); //비동기

// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout( ()=> {
            if(
                (id === 'park' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'park'){
                onSuccess({name: 'park', role: 'admin'});
            }else{
                onerror(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)
