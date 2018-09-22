'use strict'

var sumJohn = 0;
var sumMark = 0;
var tipAverageJohn = 0;
var tipSAverageMark = 0;
var str = 'чаевых больше заплатил ';
var str2 = 'больше любит покушать ';

function John() {
    var cashJohn = [124, 48, 268, 180, 42];
    var tipJohn = [];
    var xJohn = {};

    for (var i = 0; i < cashJohn.length; i++) {
        if (cashJohn[i] <= 50) {
            tipJohn[i] = Math.ceil(cashJohn[i] * 0.20);
            xJohn[cashJohn[i]] = tipJohn[i];
            sumJohn += tipJohn[i];
        }

        if (cashJohn[i] > 50 && cashJohn[i] <= 200) {
            tipJohn[i] = Math.ceil(cashJohn[i] * 0.15);
            xJohn[cashJohn[i]] = tipJohn[i];
            sumJohn += tipJohn[i];
        }

        if (cashJohn[i] > 200) {
            tipJohn[i] = Math.ceil(cashJohn[i] * 0.10);
            xJohn[cashJohn[i]] = tipJohn[i];
            sumJohn += tipJohn[i];
            sumJohn /= cashJohn.length;
        }

    }

    function arraySum() {
        var a = 0;
        for (var i = 0; i < tipJohn.length; i++) {

            tipAverageJohn = a += tipJohn[i];
        }
        tipAverageJohn /= tipJohn.length;
    }

    arraySum();
}

John();

function mark() {

    var cashMark = [77, 375, 110, 45];
    var tipMark = [];
    var x = {};

    for (var i = 0; i < cashMark.length; i++) {
        if (cashMark[i] <= 100) {
            tipMark[i] = Math.ceil(cashMark[i] * 0.20);
            x[cashMark[i]] = tipMark[i];
            sumMark += tipMark[i];
        }

        if (cashMark[i] > 100 && cashMark[i] <= 300) {
            tipMark[i] = Math.ceil(cashMark[i] * 0.10);
            x[cashMark[i]] = tipMark[i];
            sumMark += tipMark[i];

        }

        if (cashMark[i] > 300) {
            tipMark[i] = Math.ceil(cashMark[i] * 0.25);
            x[cashMark[i]] = tipMark[i];
            sumMark += tipMark[i];
            sumMark /= cashMark[i];

        }
    }

    function arrSum() {
        var b = 0;
        for (var i = 0; i < tipMark.length; i++) {

            tipSAverageMark = b += tipMark[i];
        }
        tipSAverageMark /= tipMark.length;
    }

    arrSum();
}

mark();

if (tipAverageJohn > tipSAverageMark) {
    alert(str + 'John');
}
else {
    alert(str + 'Mark');
}

if (sumJohn > sumMark) {
    alert(str2 + 'Jonh');
}
else {
    alert(str2 + 'Mark');
}

module.exports = John;