// promise is javascript object for asynchronous operation
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. producer
// when new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    //doing some h eacy work(network, read files);
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    },2000)
});

// 2. Consumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fectchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fectchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then( num => console.log(num));

// 4. Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
        setTimeout(() => reject(new Error(`error ! ${hen} => 달걀`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

/* 생략가능 
.then(getEgg)
.then(cook)
.then(console.log);
*/

getHen() //
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);
