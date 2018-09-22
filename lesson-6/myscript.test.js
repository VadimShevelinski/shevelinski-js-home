var cashJohn = [124, 48, 268, 180, 42];
var tipJohn = [];
var xJohn = {};
var sumJohn = 0;

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

var cashMark = [77, 375, 110, 45];
var tipMark = [];
var x = {};
var sumMark = 0;

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




describe('checks function John', function () {
    it('length array', function () {
        expect(cashJohn.length === tipJohn.length).toBe(true)
    });
    it('sum check + value', function () {
        expect(cashJohn > cashMark).toBe(true)
    });

});