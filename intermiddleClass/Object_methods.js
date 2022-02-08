let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user);

function makeObj(key, val){
    return {
        [key]: val,
    };
}

const obj = makeObj("나이",33);
console.log(obj);

const user2 = {
    name: "Mike2",
    age: 22,
};
// 값이 변환
const user22 = user2;
//user22.name = "Tom";
//console.log(user2);
//console.log(user22);

const user33 = Object.assign({},user2);
console.log(user2);
console.log(user33);
//1. key 배열 변환
const result = Object.keys(user2);
console.log(result);
//2. valuse 배열로 변환
const result2 = Object.values(user2);
console.log(result2);
//3. key값, valuse값 배열로 변환
const result3 = Object.entries(user2);
console.log(result3);

let arr = [
    ['mon', '월'],
    ['tue', '화']
]
//4. 배열 -> 별도에 객체로 변환
const result4 = Object.fromEntries(arr);
console.log(result4);