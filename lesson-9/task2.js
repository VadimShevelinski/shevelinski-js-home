'use strict';

function isPal(str) {
    var strReverse = str.toLowerCase().replace (' ', '').split('').reverse().join('');
    if (strReverse !== str.toLowerCase().replace(' ', '')) {
        return false;
    } else {
        return true;
    }
}
console.log(isPal('Anna')); // true
console.log(isPal('Оно но')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

module.exports = isPal;
