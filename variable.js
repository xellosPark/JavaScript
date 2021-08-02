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
 

