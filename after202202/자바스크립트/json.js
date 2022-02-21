//JSON
// JavaScript Object Notation

//1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {      //함수는 ojbect의 있는 데이터가 아니기때문! Symbol 또한 x
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);   //원하는 부분만 보낼수있음.
console.log(json);

console.clear();

//세밀하게 통제하고 싶을때 콜백함수 사용
json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key},  value: ${value}`);
    return key === 'name' ? 'ellie' : value;  
});
console.log(json);

console.clear();

//2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json,(key,value)=>{
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj); //함수는 빠짐

console.log(rabbit.birthDate.getDate());        
console.log(obj.birthDate.getDate()); // 에러 !! brithdate string이기 떄문에 object로 만들어서 리턴받아야함

//유용한사이트
//1. JSON Diff : (첫번째로 받아온 데이터랑 두번째로 받아온 데이터 다른점 비교가능) 디버깅할때좋음
//2. JSON Beautifier : 복사붙여넣기 포맷 깔끔하게 가능
//3. JSON Parser : json을 object 방식으로 눈으로 쉽게 볼수있음
//4. JSON Validator : 유효한 JSON type인지 확인 가능