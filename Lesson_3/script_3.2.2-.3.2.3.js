"use strict";

//Task 2
const name = "Vasya";

if (typeof name === 'string') {
    console.log("Hello Vasya");
} else {
    console.log("Ошибка, не тот тип данных");
}


//Task 3: Вывести в консоль примеры всех типов данных
let one = 10;
console.log(one);
console.log(typeof one);

let two;
console.log(two);
console.log(typeof two);

let three = null;
console.log(three);
console.log(typeof three);

let four = true;
console.log(four);
console.log(typeof four);

let five = 10222111456857455n;
console.log(five);
console.log(typeof five);

let six = 18;
let sixInfo = `Hello, I am ${six}!`;
console.log(sixInfo);
console.log(typeof sixInfo);

let seven = Symbol('id');
console.log(seven);
console.log(typeof seven);

let eight = {
    name: 'Olha',
    age: 20
}
console.log(eight);
console.log(typeof eight);

let nine = function name(arg) {
//code of function
}
console.log(nine);
console.log(typeof nine);
