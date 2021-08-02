// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
console.log("Hellol Wolrd"); 

//2. Variable
//let (Added in ES6)
let globalName = 'global name';
{
  let name = 'xellos';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
 console.log(name);
 console.log(globalName);


 // var (don't ever use this!)
 // var hoisting(값을 맨위에 자동으로 선언을 한다. (move declaration from bottom to top))
 // has no block scope (var 값이 {} 무시하고 값을 출력한다.)
 //{
  console.log(age);
  var age;
  age = 4;
  console.log(age);
 //}

 //3. Contants
 // favor immutable data type always for a few reasons;
 // - security
 // - thread safety
 // - reduce human mistakes
 const daysInWeek = 7;
 const maxNumber = 5;
 

//4. Variable types;
// primitive, single item: number, string, boolean, null,  symbol
// objec, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal nnmber
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number-speicla numeric values: infinity, -infinity, NaN
// 예외 처리
const infinity = 1 / 0;
const neqativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(neqativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //teplate literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true :  any other value

const conRead = true;
const test =3 < 1; //false
console.log(`value: ${conRead}, type: ${typeof conRead}`);
console.log(`value: ${test}, type: ${test}`)

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// let x;
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, creart unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false 같지 않다
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description (string 변경 해야한다.)
console.log(`value: ${symbol2.description}, type: ${typeof symbol2}`);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true 같다

// object, real-life object, data structure
const park = { nmae: 'djpark', age: 30};
park.age = 35;
// 5. Dynamic typing: dynamically tuped language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // 오류 발생