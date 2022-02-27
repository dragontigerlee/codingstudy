// async & await
// clear style of using promise 

// 1. async

//promis를 간단하게 변환
// function fetchUser() {
//     return new Promise((resolve,reject)=>{
//         resolve('ellie');
//     })
// }
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
//변환
async function pickFruits() {
    try{
        const applePromise = getApple(); //promise 만들자마자 실행되기때문에 동시에 병렬적으로 진행됨
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    }catch(e) {
        console.log(e);
    }
}
pickFruits().then(console.log);

// 3.useful promise APIs
function pickAllFruits() {
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(),getBanana()]);
}