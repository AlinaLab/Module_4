// //Блок 1. Завдання 1
// let userInput = prompt('Введіть число');
// userInput = Number(userInput);
// while (isNaN(userInput)) {
//     userInput = prompt('Введіть число')
//     userInput = Number(userInput)
// }
// let result = 0;
// let i = 1
// while (i <= userInput) {
//     result += i ** 2
//     i += 1
// }
// console.log(result);
//
//
// //Блок 1. Завдання 2
// let arr1 = [3, 5, 12, 9, 23, 93, 17];
// let arr2 = arr1.filter(elem => (2 < elem && elem < 20))
// let arrSum = 0;
// arr2.forEach(num => arrSum += num);
// console.log(arrSum)
//
//
// //Блок 1. Завдання 3
// let arr3 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
// let arr4 = [];
// arr3.forEach(elem => arr4 = arr4.concat(elem));
// arr4 = arr4.filter(elem => (typeof elem == 'number' && elem % 2 == 0));
// let arrSum2 = 0;
// arr4.forEach(num => arrSum2 += num);
// console.log(arrSum2);
//
//
// //Блок 1. Завдання 4
// let userObj = {
//     qwe: 'qwe'
// }
// function getAtribute (someObj) {
//     inputKey = prompt('Введіть ключ')
//     if (inputKey in someObj) {
//         console.log('Вже є')
//     } else {
//         inputValue = prompt('Введіть значення')
//         someObj[inputKey] = inputValue
//     }
// }
// getAtribute(userObj)
// console.log(userObj)
//
//
// //Блок 2. Завдання 1-3
// someObj = {
//     someAtribute: 'five',
//     someAtribute2: 'nine',
//     numAtr: 4,
//     numAtr2: 5,
//     values: [1, '2', 4, 8, '8',  3, 10, null, false],
//     someMethod(a, b) {
//         console.log(this.someAtribute + a + b)
//     }
// }
// someObj2 = {
//     someAtribute: 'six'
//
// }
// var bindFunc = function(func, context) {
//     return function(...args) {
//         return func.apply(context, [...args])
//     }
// }
// let somebindFunc = bindFunc(someObj.someMethod, someObj)
// somebindFunc(5, 7)
// let somebindFunc2 = bindFunc(someObj.someMethod, someObj2);
// somebindFunc2(3, 6);
//
// function sumAtr() {
//     return function() {
//         result = 0
//         for (key in this){
//             if (isNaN(this[key]) === false) {
//                 result += this[key]
//             }
//         }
//         return result
//     }
// }
// someObj.sumAtr = sumAtr();
// console.log(someObj.sumAtr());
//
// function getNewArray() {
//     return function() {
//         if ('values' in this) {
//             return this.values.filter(number => typeof(number) == 'number')
//         } else {
//             return 'Values не знайдено'
//         }
//     }
// }
// someObj.getNewArray = getNewArray();
// console.log(someObj.getNewArray())
// someObj2.getNewArray = getNewArray();
// console.log(someObj2.getNewArray())
//
//
// //Блок 3. Завдання 1
// const citiesAndCountries = {
// 	'Київ': 'Україна',
// 	"Н`ю-Йорк": 'США',
// 	'Амстердам': 'Нідерланди',
// 	'Берлін': 'Німеччина',
// 	'Париж': 'Франція',
// 	'Ліссабон': 'Португалія',
// 	'Відень': 'Австрія',
// };
//
// function getCity(Obj) {
//     result = []
//     for ([key, value] of Object.entries(Obj)){
//         result.push(`${key} - це ${value}`)
//     }
//     return result
// }
// console.log(getCity(citiesAndCountries))
//
//
// //Блок 3. Завдання 2
// const namesOfDays = {
//     ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятница", 'Субота', 'Неділя'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// }
//
// function getNameOfDay(lang, datNumber) {
//     return namesOfDays[lang][datNumber-1]
// }
// console.log(getNameOfDay('ua', 5))
//
//
// //Блок 3. Завдання 3-4
// const person = {
//     name: 'Ivan',
//     ageValidation (someAge) {
//         if (someAge<18) {
//             return false
//         } else {return true}
//     },
//     setName (someName) {
//         this.name = someName
//     },
//     getName() {
//         return this.name
//     },
//     setAge (someAge) {
//         if (this.ageValidation(someAge)){
//             this.age = someAge
//         } else {this.age = 'Validation Error'}
//     },
//     getAge() {
//         return this.age
//     }
// };
// const person1 = {
//     age: 1
// };
// function setProto (currentObj, protoObj) {
//     currentObj.__proto__ = protoObj
// }
// console.log(person1)
// setProto(person1, person)
// console.log(person1.name)
// person1.setAge(1);
// let b = person1.getAge();
// console.log(b)
// person1.setAge(20);
// let d = person1.getAge();
// console.log(d)