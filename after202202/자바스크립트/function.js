//bad
function upgradeUser(){
    if(user.point >10 ){
        //long upgrade logic..
    }
}

//good
function upgradeUser(){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic..
}


//anonymous function
const print = function () {
    console.log('pring');
};
print();
//차이점~
//선언하기전에 안됨
//일반 함수는 선언전에 사용가능 


//callback function
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    }else{
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
}

const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
const simplePrint = function () {
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    //do someting more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression

(function hello() {
    console.log('IIFE');  
})();