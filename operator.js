// 1. String concatenation
console.log('my'+'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('pakr\'s book');
console.log("pakr's \n\tbook"); //\n 개행 \t tap key

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 2); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = connter;  3
console.log(`preIncrement ${preIncrement}, counter: ${counter}`); // exponentiation
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;  4
console.log(`postIncrement ${postIncrement}, counter: ${counter}`);
const preDectement = --counter;
console.log(`preDectement ${preDectement}, counter: ${counter}`);
const postDectement = counter--;
console.log(`preDectement ${postDectement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); //  greater than
console.log(10 >= 6); // greater than or equal

//6. Logical Operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${ value1 || value2 || check() }`);

// && (and), find the first truthy value
console.log(`and: ${ value1 && value2 && check() }`);

// if(nullableObject != null){
//     nullableObject.something;
// }


function check(){
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('❓');
    }
    return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const park1 = {nmae: 'park'};
const park2 = {nmae: 'park'};
const park3 = park1;
console.log(park1 == park2);
console.log(park1 === park2);
console.log(park1 === park3);

// equality - puzzler
console.log(0 == false);  // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined);  //false