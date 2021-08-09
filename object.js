
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