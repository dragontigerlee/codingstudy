//첫번쨰 자료구조 array

// index position
const fruits  = ['🍎','🍌'];
console.log(fruits[0]);
console.log(fruits[fruits.length -1 ]);
console.clear();
// Looping over an array
fruits.forEach((v,i)=>{
    console.log(v);
});

// for of
for(let fruit of fruits) {
    console.log(fruit);  
}

// push
fruits.push('🍓','🍑');
// pop
fruits.pop();
fruits.pop();

//unshift 앞에서부터 값 추가
fruits.unshift('🍓','🍋');  
console.log(fruits);
//shift 앞에서부터 값 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift,unshift are slower than pop, push
// pop,push는 기존값들을 건드리지않고 뒤에서 하기 떄문에 빠름
// 배열이 길면 길수록 shift,unshift 비효율 , shift,unshift는 전체가 움직여야 하므로!

//splice
fruits.push('🍓','🍑','🍋');
fruits.splice(1,1);//시작점, 갯수
fruits.splice(1,1,'🍏','🍉');//시작점, 갯수, 그이후에 삽입

//combine
const fruit2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);
console.clear();

//searching
console.log(fruits);
//indexof //있으면 인덱스값 없으면 -1
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🥘'));

//include=>포함되면 true 아니면 false
console.log(fruits.includes('🍉'));

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));