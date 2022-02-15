'use strict';

//getter setter
class User{
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 :value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);

//static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//오버라이딩
//extends(상속)시 필요한 메서드만 재정의

//instanceOf 상속인지 아닌지
//ex) console.log(triangle instanceof Object) true