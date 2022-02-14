/**
 * arr.sort()
 * 배열 재정렬
 * 주의! 배열 자체가 변경됨
 * 인수로 정렬 로직을 담은 함수를 받음
 */

//  [1, 2, 3, 4, 5]
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);

// ['a', 'b', 'c', 'd', 'e']
let arr1 = ["a","c","d","e","b"];
arr1.sort();
console.log(arr1);

// [13, 27, 5, 8] 문자열 중심으로 정렬
let arr2 = [27,8,5,13];
arr2.sort();
console.log(arr2);
//  =>
function fn(a, b){
    return a - b;
}

arr2.sort(fn);
console.log(arr2);
// lodash lib 사용
arr2.sort((a, b) => {
    return a - b;
});
console.log(arr2);

// 배열의 모든수 합치기

let arr3 = [1,2,3,4,5];
//for, for of, forEach

let result = 0;
arr3.forEach((num) => {
    result += num;
});

console.log(result);

/**
 * arr.reduce()
 * 인수로 함수를 발음
 * (누적 계산값, 현재값) => {return 계산값};
 */

const result2 = arr3.reduce((prev, cur) => {
    return prev + cur;
},0) // 0은 초기값

console.log(result2);

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 3 },
    { name: "steve", age: 60 },
];

// 성인  구분
const result3 = userList.reduce((prev, cur) => {
    if (cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
},[]) // 빈값은 초기값

console.log(result3);

// 전체 나이 합
const result4 = userList.reduce((prev, cur) => {
    return (prev += cur.age); 
},0) // 0은 초기값
console.log(result4);

// 이름 3글자
const result5 = userList.reduce((prev, cur) => {
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev; 
}, []) // 0은 초기값
console.log(result5);