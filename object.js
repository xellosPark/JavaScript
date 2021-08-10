
// object

// 1. Literals and properties
// object = {key : value};
const obj1 = {}; //`object literal' syntax
const obj2 = new Object(); // `object constructor ` syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const park = { name: `park`, age: 4};
print(park);

// Runtime: 프로그램이 동작하고 있을때

//park.hasjob = true; 
//console.log(park.hasjob);

// 삭제도 가능
//delete park.hasjob;
console.log(park.hasjob);

// 2. Computed properties
console.log(park.name);
// string type만 배열 스타일로 가능하다.
console.log(park['name']);
//새로 변수가능하다.
park['hasjob'] = true;
console.log(park.hasjob);

function printValue(obj, key) {
    // obj 접근할때는 배열 형식으로 받아온다.
    //console.log(obj.key);
    console.log(obj[key]);
}

printValue(park, 'name');
printValue(park, 'age');

//3. Proety value shorthand
const person1 ={ name: 'bob', age: 2};
const person2 ={ name: 'steve', age: 3};
const person3 ={ name: 'dave', age: 4};
const person4 = makePerson('park', 30);
console.log(person4);

function makePerson(name, age){
    return {
        // name: name,
        // age: age,
        // key, value 값이 같은 경우에 인자값을 생략가능하다.
        name,
        age,

    };
}
// 4. Constutor 함수 
const person5 = new person('dong', 30);
console.log(person5);
// object 자동으로 생성
function person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // 결국 return this;
}

// 5. in operator: property existence check (key in obj)
// odj key 여부 확인
console.log('name' in park);
console.log('age' in park);
console.log('random' in park);
console.log(park.random);

//6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in park){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for (value of array){
    console.log(value);
}

//7. Fun cloning
// Objec.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'park', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {}; 
Object.assign(user4, user);
console.log(user4);

//const user4 = Object.assign({}, user); 

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size); 