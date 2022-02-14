// forEach
let arr = ["Mike","Tom","Jane"];

arr.forEach((name, index) => {
    console.log(`${index}. ${name}`);
});

let arr1 =  [1, 2, 3, 4, 5, 6];

// find / findIndex
const result = arr1.find((item) => {
    return item % 2 === 0;
});

console.log(result);

let userList = [
    {name: "Mike", age:30},
    {name: "Jane", age:27},
    {name: "Tom",  age:10},
];

//const result1 = userList.find((user) => {
const result1 = userList.findIndex((user) => {    
    if (user.age < 19 ) {
        return true;
    }
    return false;
});

console.log(result1);

// find / filter
const result3 = arr1.filter((item) => {
    return item % 2 === 0;
});

console.log(result3);

//arr.map()
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);

// join, split
let arr3 = ["안녕", "나는", "철수야"];
let result4 = arr3.join();
let result5 = arr3.join("  ");
let result6 = arr3.join("-");
console.log(result4);
console.log(result5);
console.log(result6);

// split -> 문자열을 배열로 만듦
const users = "Mike,Jane,Tom,Tony";
const result7 = users.split(",");
console.log(result7);
let str = "Hello, My name is Mike";
const result8 = str.split("");
console.log(result8);

// Array, isArray()

let quser = {
    name: "Mike",
    age : 30,
};

let userarr = ["Mike","Jane","Tom"];

console.log(typeof quser);
console.log(typeof uesrarr);

console.log(Array.isArray(quser));
console.log(Array.isArray(userarr));