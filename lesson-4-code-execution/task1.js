'use strict';

function maxTasks(list) {
    let max = 0;
    let name;
    for (let key in list) {
        if (list[key] > max) {
            max = list[key];
            name = key;
        }
    }
    return name;
}
module.exports = maxTasks;