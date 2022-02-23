//hoisting : var, function declaration 자동적으로 제일 위 올라감
console.log('1');
setTimeout(()=>{
    console.log('2');
},1000)
console.log('3');

//synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print , timeout);
}

printWithDelay(()=>console.log('async callback'),2000);

// callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'corder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name : 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }

}

const id = prompt('ID를 입력하세요.');
const pw = prompt('PW를 입력하세요');
const userStorage = new UserStorage();

userStorage.loginUser(
    id,
    pw,
    user => {
        userStorage.getRoles(
            user,
            userRole => {
                alert(`hello ${userRole.name}!! you are a ${userRole.role} role!`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error =>{
        console.log(error);
    }
)
