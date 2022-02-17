//Object

const ellie = { name : 'ellie', age : 20, hasJob : true }
//삭제가능
// delete ellie.age;


//2가지 방법으로 접근 가능
console.log(ellie.name);
//computed properties  -> 정확한 키를 모를때 사용함
console.log(ellie['name']); //string으로 해야한다

function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}

printValue(ellie, 'name'); //-> undefined
const lyh = new Person('yongho',30);
console.log(lyh);

//constuctor function 
function Person(name,age) {
    this.name=name;
    this.age=age;
}

//in operator
console.log('name' in ellie); // true

//for..in vs for..of
//for(key in obj)
console.clear();
for(key in ellie) {
    console.log(key);
}

//for(value of iterable)
const array = [1,2,3,4,5];
for(value of array) {
    console.log(value);
}

//cloning
const user = {name:'ellie', age:20};
const user2 = user; //동일한 ref만 있고 주소값은 다르다
user2.name = 'coder';
console.log(user.name); // -> coder;

//old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}

//new away Object.assign
const user4 = {};
Object.assign(user4,user);





