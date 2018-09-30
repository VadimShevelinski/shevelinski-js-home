'use strict';

function aclean() {
    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];
    }
    var result = [];
    for (var key in obj) result.push(obj[key]);
    return result;
}
var obj = {};
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
aclean();
console.log(aclean(arr));

module.exports = aclean;