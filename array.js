'use strict';

//Array
// 1. Declaration

const arr1 = new Array();
const arr2 = [1,2,3,4];

//Index position
const fruits = ['🍎','🍌'];
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
// callback 호출
   //fruits.forEach(function (fruit, index, array) {
    // 대부분 
    // {
    //   console.log(fruit, index);
    //   console.log(array);
  // });
// 간단하게 사용할수 있다
//fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an itom to the and
fruits.push('🍓','🍊');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the benigging
// 배열 맨앞에 추가
fruits.unshift('🥮','🥑');
console.log(fruits);

//shift: remove an item from the benigging
// 데이터를 맨앞에서 하나 삭제한다
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 중간에 값 추가

fruits.push('🌶','🍖','🍟');
console.log(fruits);
// 1번째에서 한개만 삭제
fruits.splice(1,1);
console.log(fruits);
//1번째에서 1개 삭제후 그 자리에 두개를 추가
fruits.splice(1,1,'🍧','🍘');
console.log(fruits)

// combine two arrays
const fruits2 = ['🍨','🧉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching (검색)
//console.clear();
console.log(fruits);
// indexOf: find the index
// 현재 배열에 검색하여 몇번째지 검사
console.log(fruits.indexOf('🥑'));
console.log(fruits.indexOf('🍧'));

// bool 형으로 리턴함
// includes
console.log(fruits.includes('🍧'));
console.log(fruits.includes('🧀'));

// lastIndexOF
fruits.push('🥑');
console.log(fruits);
// 처음 꺼 인덱스 리턴
console.log(fruits.indexOf('🥑'));
// 마지막 꺼 인덱스 리턴
console.log(fruits.lastIndexOf('🥑'));
