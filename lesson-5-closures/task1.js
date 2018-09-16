'use strict';

let result = "\n";
let quantity = 12;
const black = '#';
const white = " ";
for (let row = 1; row <= quantity; row++) {
    for (let cell = 1; cell <= quantity; cell++) {
        if (row % 2 === cell % 2) {
            result += black;
        }
        else {
            result += white;
        }
    }
    result += "\n";
}
console.log(result);
