// astnc & await
// clear style of using promise :)

// 1. async
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         //do network reqeust in 10 sec...
//         resolve('park');
//     })
// }
// 1. async
async function fetchUser(){
    //do network reqeust in 10 sec...
    return 'park';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 
function delay(ms){
    return new Promise( resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍬';
}

// function getBanana() {
//     return delay(3000)
//     .then(()=> '🍬');
// }   

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// async function pickFruits(){
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

// async function pickFruits(){
//     try{
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple} + ${banana}`;

//     } catch() {
//         return `${apple} + ${banana}`;
//     }
    
// }
// 병렬 처리
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 병렬처리
// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);