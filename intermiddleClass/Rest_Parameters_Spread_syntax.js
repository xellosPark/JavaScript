/**
 * 나머지 매개변수
 * 전달 받은 모든 수를 더해야함
 */

function add(...numbers) {
    let result = 0;
    result = numbers.reduce((prev, cur) => prev + cur);
    //numbers.forEach((num) => (result += num));
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);
// 나머지 변수 function aruments 사용시에는 맨마지막 인자로 사용해야 한다.
// function User(name, age, ...skills, sex){ 오류 발생
// 나머지 aruments 사용 배열로 저장이 된다.
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom",  20, "Js", "React");
const user3 = new User("Mike", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);

let arr4 = [1,2,3];
let arr5 = [4,5,6];

let result6 = []