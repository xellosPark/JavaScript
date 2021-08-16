// JSON
// JavaScript Object Notation

// 1. Object to JSON
// Stringfy(obj) JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환한다.
// JSON.stringify stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!` );
    },
};

json = JSON.stringify(rabbit);
console.log(json);// {"name":"tori","color":"white","size":null,"birthDate":"2021-08-16T13:03:18.655Z"}

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); //{"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'park' : value;
    
//json.js:30 key: name, value: tori
//json.js:30 key: color, value: white
//json.js:30 key: size, value: null
//json.js:30 key: birthDate, value: 2021-08-16T13:07:02.577Z
//json.js:30 key: jump, value: () => {
});
//console.log(json); //{"name":"tori","color":"white"}


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => { //{name: "tori", color: "white", size: null, birthDate: Mon Aug 16 2021 22:27:07 GMT+0900 (한국 표준시)}
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate()); //16
console.log(obj.birthDate.getDate()); //16