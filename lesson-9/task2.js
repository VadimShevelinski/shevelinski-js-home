'use strict';

function isPal(string) {
    var arr = string ? string.split(' ').join('').toLowerCase().split('') : [];
    var arrReversed = arr.slice().reverse();
    return arr.join('') === arrReversed.join('');
}
module.exports = isPal;
