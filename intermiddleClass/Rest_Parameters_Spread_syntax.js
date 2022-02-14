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
/**
 * 전개 구문
 * arr4 을 [4,5,6,1,2,3] 으로
 */

let arr4 = [1,2,3];
let arr5 = [4,5,6];

//arr5.forEach((num)=>{ //(6) [6, 5, 4, 1, 2, 3]
arr5.reverse().forEach((num)=>{ //(6) [4, 5, 6, 1, 2, 3]
    arr4.unshift(num); //unshift 배열의 앞에 아이템을 추가한다
});

console.log(arr4);
arr6 = [...arr5, ...arr4];
console.log(arr6);

let user = { name: "Mike"};
let info = { age: 30};
let fe   = ["JS","React"];
let lang = ["Korean","English"];

user = Object.assign({}, user, info, {
    skills: [],
});
console.log(user); //{name: 'Mike', age: 30, skills: Array(0)}

fe.forEach((item) => {
    user.skills.push(item);
});

lang.forEach((item) => {
    user.skills.push(item);
});

 console.log(user); //{name: 'Mike', age: 30, skills: Array(4)}
                    // age: 30
                    // name: "Mike"
                    // skills: (4) ['JS', 'React', 'Korean', 'English']
                    
user4 = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user1);//{name: 'Mike', age: 30, skills: Array(4)}
// age: 30
// name: "Mike"
// skills: (4) ['JS', 'React', 'Korean', 'English']