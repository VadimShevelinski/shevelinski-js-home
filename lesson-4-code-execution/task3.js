'use strict';

let res = [];
let sum = 0;

do {
    let input = prompt('Введите число', '');
    let value = parseInt(input);
    sum += value;
    res.push(value);
} while (input !== null);

console.log(sum);