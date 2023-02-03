// //Блок 3. Завдання 1
// let arr = ['Капуста', 'Ріпа', 'Редиска', 'Морква'];
// console.log(arr.join('|').toString())
//
//
// //Блок 3. Завдання 2
// const str1 = 'Вася;Петро;Вова;Олег';
// const arr2 = str1.split(';');
// console.log(arr2);
//
//
// //Блок 3. Завдання 3
// function sayHello2(name){
//     if (arguments.length == 0) {
//         console.log('Привіт, гість')
//     } else {
//         console.log(`Привіт, ${name}`)
//     }
//
// }
// sayHello2()
// sayHello2('Іван')
//
//
// //Блок 3. Завдання 4
// const fruits = ['яблоко', 'ананас', 'груша'];
// function upperArr (arr) {
//     let result = []
//     for (var fruit in arr) {
//         result.push(arr[fruit].toUpperCase())
//     }
//     return result
// }
// const fruitsInUpperCase = upperArr(fruits)
// console.log(fruitsInUpperCase)
//
//
// //Блок 3. Завдання 5
// const val = [1, 2, 3, 4];
// console.log(val)
// console.log(val.map(x => x + 1))
//
//
// //Блок 3. Завдання 6
// const val = getsum(1, 2, 3, 4);
// function getsum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// console.log(getsum(1, 2, 3, 4))
//
//
// //Блок 3. Завдання 7
// const arr3 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
// const numberArray = arr3.filter(number => typeof(number) == 'number')
// console.log(numberArray)
//
//
// //Блок 3. Завдання 8
// function arrayTesting(arr){
//     if (arr.some(val => val == true) === true){
//         return 'Знайшли true значення';
//     } else { return 'Нічого немає'}
// }
// const haveTrueValue = arrayTesting([0, false, null, 1]);
// console.log(haveTrueValue)
// const dontHaveTrueValue = arrayTesting([0, false, null, 0]);
// console.log(dontHaveTrueValue);