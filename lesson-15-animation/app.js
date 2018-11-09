'use strict';

const AreaWidth = 600;
const AreaHeight = 400;
const PlayerWidth = 15;
const PlayerHeight = 100;
const BallDiam = 40;
const body = document.body;
let Tarea;
let leftPlayer;
let rightPlayer;
let ball;

function createAria() {
    Tarea = document.createElement("div");
    Tarea.style.width = AreaWidth +"px";
    Tarea.style.height = AreaHeight + "px";
    Tarea.style.backgroundColor = "#F0EE7E";
    Tarea.style.position = "relative";
    body.appendChild(Tarea);
    createRightPl();
    createLeftPl();
    createBall();
}
createAria();

function createLeftPl() {
    leftPlayer = document.createElement("div");
    leftPlayer.style.width = PlayerWidth + "px";
    leftPlayer.style.height = PlayerHeight + "px";
    leftPlayer.style.backgroundColor = "green";
    leftPlayer.style.position = "absolute";
    Tarea.appendChild(leftPlayer);
}

function createRightPl() {
    rightPlayer = document.createElement("div");
    rightPlayer.style.width = PlayerWidth + "px";
    rightPlayer.style.height = PlayerHeight + "px";
    rightPlayer.style.backgroundColor = "blue";
    rightPlayer.style.position = "absolute";
    Tarea.appendChild(rightPlayer);
}

function createBall() {
    ball = document.createElement("div");
    ball.style.width =BallDiam + "px";
    ball.style.height = BallDiam + "px";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "#B22222";
    ball.style.position = "absolute";
    ball.style.display = 'none';
    Tarea.appendChild(ball);
}
