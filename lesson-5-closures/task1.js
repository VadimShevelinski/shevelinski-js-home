'use strict';

function drawGrid(length) {
    const gridSharp = '#';
    const gridSpace = ' ';
    const gridLineBreak = '\n';
    let grid = '';
    for (let n = 1; n <= length; n++) {
        for (let i = 1; i <= length; i++) {
            if ((n + i) % 2 === 0) {
                grid += gridSharp;
            }  else {
                grid += gridSpace;
            }
        }
        grid += gridLineBreak;
    }
    console.log(grid);
}

drawGrid(26);
drawGrid(11);

