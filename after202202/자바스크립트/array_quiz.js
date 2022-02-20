
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}

// Q2. make an array out of a string
{
    //2번째 인자 : 개수설정 가능
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(',',2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
    
}

// Q4. make new array without the first two elements
{
    //splice 삭제한 배열의 요소를 담은 배열
    const array = [1, 2, 3, 4, 5];
    const newArray = array.splice(2,3);
    console.log(newArray);

    //slice
    const array2 = [1, 2, 3, 4, 5];
    console.log(array2.splice(2,5));
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //find 조건에 부합하는 값 배열 리턴
    const answer = students.find((v)=>{
        //if(v.score === 90) return true;
        return v.score === 90;
    })
    console.log(answer);
}

// Q6. make an array of enrolled students
{
    //filter 조건에 부합하는 모든 값 배열형태 리턴
    const answer = students.filter((v)=>{
        return v.enrolled;
    })
    console.log(answer);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// ANOTHER WAY !! map
{
    // const answer = new Array();
    // students.forEach((v,i)=>{
    //     answer.push(v.score);
    // })
    // console.log(answer);

    const result  = students.map((v,i)=>{
        return v.score;
    });
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// ANOTHER WAY !! some,every
{
    // const answer = students.find((v)=>{
    //     if(v.score <= 50) return true;
    // })
    // console.log(answer);

    //어느하나 만족하는지?
    const result = students.some((student) => student.score < 50);
    console.log(result);
    
    //모든것이 만족하는지?
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
// ANOTHER WAY !! reduce, reduceright
{
    // let avg=0;
    // for(let v of students){
    //     avg += v.score;
    // }
    // console.log(`average sore is ${avg/students.length}`);
    const result = students.reduce((prev, curr) => {
        return prev + curr.score; //return 생략가능 
    }, 0);
    console.log(`average sore is ${result/students.length}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// ANOTHER WAY !! 
{
    // const arr = new Array();
    // const answer = students.forEach((v,i)=>{
    //     arr.push(v.score);
    // });
    // console.log(arr.join());
    const result = students
    .map((v,i)=> v.score)
    .filter((score) => score >= 50)
    .join();
    console.log(`result : ${result}`);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a,b) => a-b)
    .join();
    console.log(result);
}

  