class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject)  => {
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'corder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            },2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name : 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
       
    }
}

init();

function init(){
    const id = prompt('id를 입력하세요.');
    const pw = prompt('pw를 입력하세요.');
    const userStorage = new UserStorage();

    //3.async await
    checkUser();
    async function checkUser(){
        try{
            const userId = await userStorage.loginUser(id,pw);
            const userInfo = await userStorage.getRoles(userId);
            console.log(`user : ${userInfo.name} , role : ${userInfo.role}`);
        }catch(error) {
            console.log(error);
        }
    }
    
    
    //2.promise
    // userStorage.loginUser(id,pw)
    // .then(userId => userStorage.getRoles(userId))
    // .then(result => console.log(result))
    // .catch(error => console.log(error));


    //1.callback
    // userStorage.loginUser(
    //     id,
    //     pw,
    //     userId => {
    //       userStorage.getRoles(
    //           userId,
    //           getUser => { console.log(`helloe ${getUser.name} you are a ${getUser.role}`) },
    //           error => {
    //               console.log(error);
    //           }
    //       )  
    //     },
    //     error => {
    //         console.log(error)
    //     }
    // )

    
}
