'use strict'

let tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function maxTask() {

    let max = 0;
    let maxName = "";
    for (let name in tasksCompleted) {
        if (max < tasksCompleted[name]) {
            max = tasksCompleted[name];
            maxName = name;
        }

    }
    console.log(maxName);
};

maxTask();
