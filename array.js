'use strict';

//Array
// 1. Declaration

const arr1 = new Array();
const arr2 = [1,2,3,4];

//Index position
const fruits = ['๐','๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3. looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++ ) {
    console.log( fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}

//c. forEach
// callback ํธ์ถ
   //fruits.forEach(function (fruit, index, array) {
    // ๋๋ถ๋ถ 
    // {
    //   console.log(fruit, index);
    //   console.log(array);
  // });
// ๊ฐ๋จํ๊ฒ ์ฌ์ฉํ ์ ์๋ค
//fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an itom to the and
fruits.push('๐','๐');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the benigging
// ๋ฐฐ์ด ๋งจ์์ ์ถ๊ฐ
fruits.unshift('๐ฅฎ','๐ฅ');
console.log(fruits);

//shift: remove an item from the benigging
// ๋ฐ์ดํฐ๋ฅผ ๋งจ์์์ ํ๋ ์ญ์ ํ๋ค
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// ์ค๊ฐ์ ๊ฐ ์ถ๊ฐ

fruits.push('๐ถ','๐','๐');
console.log(fruits);
// 1๋ฒ์งธ์์ ํ๊ฐ๋ง ์ญ์ 
fruits.splice(1,1);
console.log(fruits);
//1๋ฒ์งธ์์ 1๊ฐ ์ญ์ ํ ๊ทธ ์๋ฆฌ์ ๋๊ฐ๋ฅผ ์ถ๊ฐ
fruits.splice(1,1,'๐ง','๐');
console.log(fruits)

// combine two arrays
const fruits2 = ['๐จ','๐ง'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching (๊ฒ์)
//console.clear();
console.log(fruits);
// indexOf: find the index
// ํ์ฌ ๋ฐฐ์ด์ ๊ฒ์ํ์ฌ ๋ช๋ฒ์งธ์ง ๊ฒ์ฌ
console.log(fruits.indexOf('๐ฅ'));
console.log(fruits.indexOf('๐ง'));

// bool ํ์ผ๋ก ๋ฆฌํดํจ
// includes
console.log(fruits.includes('๐ง'));
console.log(fruits.includes('๐ง'));

// lastIndexOF
fruits.push('๐ฅ');
console.log(fruits);
// ์ฒ์ ๊บผ ์ธ๋ฑ์ค ๋ฆฌํด
console.log(fruits.indexOf('๐ฅ'));
// ๋ง์ง๋ง ๊บผ ์ธ๋ฑ์ค ๋ฆฌํด
console.log(fruits.lastIndexOf('๐ฅ'));
