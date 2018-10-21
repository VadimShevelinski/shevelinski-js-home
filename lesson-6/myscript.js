'use strict';

var john = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function () {
        var percentage;
        var self = this;
        self.tips = [];
        self.paidAmounts = [];
        for (var i = 0; i < self.bills.length; i++) {
            var bill = self.bills[i];
            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            self.tips[i] = bill * percentage;
            self.paidAmounts[i] = bill + self.tips[i];
        }
    }
};

var mark = {
    bills: [77, 375, 110, 45],
    tipCalculator: function () {
        var percentage;
        var self = this;
        self.tips = [];
        self.paidAmounts = [];
        for (var i = 0; i < self.bills.length; i++) {
            var bill = self.bills[i];
            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            self.tips[i] = bill * percentage;
            self.paidAmounts[i] = bill + self.tips[i];
        }
    }
};

john.tipCalculator();
mark.tipCalculator();

function calcAverageTip(name) {
    var sumTips = 0;
    var tips = name.tips;
    for (var i = 0; i < tips.length; i++) {
        sumTips += tips[i];
    }
    return sumTips / tips.length;
}

var averageTipJohn = calcAverageTip(john);
var averageTipMark = calcAverageTip(mark);

console.log((averageTipJohn > averageTipMark) ? averageTipJohn : averageTipMark);

module.exports.john = john;
module.exports.mark = mark;
module.exports.calcAverageTip = calcAverageTip;