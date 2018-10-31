'use strict';

function LocStorage(menuItem) {
    let self = this;
    self.storage = {};
    if (menuItem in localStorage) {
        self.storage = JSON.parse(localStorage[menuItem]);
    }
    self.addValue = function (key, value) {
        self.storage[key] = value;
        localStorage[menuItem] = JSON.stringify(self.storage);
        return self.storage;
    };

    self.getValue = function (key) {
        return self.storage[key];
    };

    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            localStorage[menuItem] = JSON.stringify(self.storage);
            return true;
        } else {
            return false;
        }
    };

    self.getList = function () {
        return Object.keys(self.storage);
    }
}