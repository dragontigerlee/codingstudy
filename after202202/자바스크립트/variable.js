
'use strict';

 let count = 17;
 console.log(`value : ${count}, type: ${typeof count}`);

 //symbol, create unique identifiers for objects
 //symbole need .description to make string type
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol2.description}, type : ${typeof symbol2}`);

//object
const yongho = { name : 'yongho', age : 33 }
yongho.age = 34; //const이지만 내부 변경가능
console.log(`value : ${yongho.age}`);