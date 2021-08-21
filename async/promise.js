'use strict'

// Proise is a JavaScript Object for astnchronous operation.
// State: pending -> fulfilled or rejected
// producer vs Consumer

// 1. Producer
// 비동기 처리
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('park');
        //reject(new Error('on network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// 정상적으로 수행되면 then(그러면)
// promise 수행한 성공값이 promise settime 수행하여 value 값으로 출력
promise
    .then(value => {
    console.log(value);
    })
    // 싫패한 경우
    .catch(error => {
        console.log(error);
    })
    // 성공인듯 실패인듯 출력
    .finally(() => {
        console.log('finally');
    });

    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });

    fetchNumber
        .then(num => num * 2)
        .then(num => num * 3)
        .then(num => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(num - 1), 1000);
            });
        })
        .then(num => console.log(num));

    // 4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'),1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`),1000);
        setTimeout(() => reject(new Error(`error ${hen} => 🥚`)),1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`),1000);
    });

getHen() 
  .then(getEgg)
  .catch(error => {
      return '🌭';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

  //getHen() 
//  .then(hen => getEgg(hen))
//  .then(egg => cook(egg))
//  .then(meal => console.log(meal));
