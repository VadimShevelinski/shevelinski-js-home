'use strict';

let rightCount = document.getElementsByClassName('rightCount')[0];
let leftCount = document.getElementsByClassName('leftCount')[0];
let Speed = 0;
let butt = document.querySelector('input');
let AreaH = {
    width: AreaWidth,
    height: AreaHeight
};

let LeftH = {
    width: PlayerWidth,
    height: PlayerHeight,
    speedY: Speed,
    posY: 0,
    posX: 0,
    Update: function () {
        leftPlayer.style.top = this.posY + "px";
        leftPlayer.style.left = this.posX + "px";
    }
};

let RightH = {
    width: PlayerWidth,
    height: PlayerHeight,
    speedY: Speed,
    posY: 0,
    posX: AreaWidth - PlayerWidth,
    Update: function () {
        rightPlayer.style.top = this.posY + "px";
        rightPlayer.style.left = this.posX + "px";
    }
};

let BallH = {
    width: BallDiam,
    height: BallDiam,
    speedY: Speed,
    speedX: Speed,
    posY: Tarea.offsetHeight / 2 - ball.offsetHeight / 2,
    posX: Tarea.offsetWidth / 2 - ball.offsetWidth / 2,
    Update: function () {
        ball.style.top = this.posY + "px";
        ball.style.left = this.posX + "px";
    }
};

// генерация случайного числа
function RandomNum() {
    let scores = [-5, -4, -3, 3, 4, 5];
    let rand = Math.floor(Math.random() * scores.length);
    return scores[rand];
}

window.onload = StartGame;

// таймер для всего процесса
function StartGame() {
    setInterval(Game, 40);
    document.onkeydown = MovePl;
    document.onkeyup = StopPl;
    butt.onclick = MoveBl;
}


function MovePl(e) {
    e.preventDefault();
    e = e || window.event;
    let keyCode = e.keyCode;

    if (keyCode === 40) {
        RightH.speedY = 4;
    }
    else if (keyCode === 38) {
        RightH.speedY = -4;
    }
    else if (e.metaKey || e.ctrlKey) {
        LeftH.speedY = 4;
    }
    else if (e.shiftKey) {
        LeftH.speedY = -4;
    }
}

function StopPl(e) {
    e.preventDefault();
    e = e || window.event;
    let keyCode = e.keyCode;

    if (keyCode === 40) {
        RightH.speedY = 0;
    }
    else if (keyCode === 38) {
        RightH.speedY = 0;
    }
    else if (!e.metaKey || !e.ctrlKey) {
        LeftH.speedY = 0;
    }
    else if (!e.shiftKey) {
        LeftH.speedY = 0;
    }
}

// движение мяча
function MoveBl(e) {
    e.preventDefault();
    e = e || window.event;
    BallH.speedY = RandomNum();
    BallH.speedX = RandomNum();
}


function Game() {
// расставляем поле
    LeftH.Update();
    RightH.Update();
    BallH.Update();

// движение ракеток
    RightH.posY += RightH.speedY;
    LeftH.posY += LeftH.speedY;

    if (RightH.posY >= AreaH.height - RightH.height) {
        RightH.posY = AreaH.height - RightH.height;
    }
    if (RightH.posY <= 0) {
        RightH.posY = 0;
    }

    if (LeftH.posY >= AreaH.height - LeftH.height) {
        LeftH.posY = AreaH.height - LeftH.height;
    }
    if (LeftH.posY <= 0) {
        LeftH.posY = 0;
    }

// движение мяча
    BallH.posX += BallH.speedX;
    BallH.posY += BallH.speedY;
    // нижняя стенка
    if (BallH.posY + BallH.height > AreaH.height) {
        BallH.speedY = -BallH.speedY;
        BallH.posY = AreaH.height - BallH.height;
    }
    // верхняя стенка
    if (BallH.posY < 0) {
        BallH.speedY = -BallH.speedY;
        BallH.posY = 0;
    }


// столкновения мяча с ракеткой по Х
    let R_Dot = AreaH.width - (RightH.width + BallH.width);
    let L_Dot = LeftH.width;

    // правая ракетка
    if (BallH.posX >= R_Dot && BallH.posY >= RightH.posY && BallH.posY <= RightH.posY + RightH.height) {
        soundClick();
        BallH.speedX = -BallH.speedX;
        BallH.posX = R_Dot;

    }
    // левая ракетка
    else if (BallH.posX <= L_Dot && BallH.posY >= LeftH.posY && BallH.posY <= LeftH.posY + LeftH.height) {
        soundClick();
        BallH.speedX = -BallH.speedX;
        BallH.posX = L_Dot;

    }

    else if (BallH.posX + BallH.width >= AreaH.width && BallH.speedX !== 0 && BallH.speedY !== 0) {
        BallH.posX = AreaH.width - BallH.width;
        BallH.speedX = 0;
        BallH.speedY = 0;
        // счет
        let num_playL = leftCount.innerHTML;
        num_playL = parseFloat(num_playL) + 1;
        leftCount.innerHTML = num_playL;

    }

    else if (BallH.posX <= 0 && BallH.speedX !== 0 && BallH.speedY !== 0) {
        BallH.posX = 0;
        BallH.speedX = 0;
        BallH.speedY = 0;
        // счет
        let num_playR = rightCount.innerHTML;
        num_playR = parseFloat(num_playR) + 1;
        rightCount.innerHTML = num_playR;
    }

    butt.onclick = function () {
        BallH.posY = Tarea.offsetHeight / 2 - ball.offsetHeight / 2;
        BallH.posX = Tarea.offsetWidth / 2 - ball.offsetWidth / 2;

        BallH.speedY = RandomNum();
        BallH.speedX = RandomNum();
        console.log(BallH.speedY + " " + BallH.speedX);
    }

}

function soundClick() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'Sound.wav'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}