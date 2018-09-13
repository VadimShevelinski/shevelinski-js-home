const maxTask = require('task1.js');

let tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

test('max Tasks for Anton', () => {
    expect(maxTask(tasksCompleted)).toBe('Anton');
});