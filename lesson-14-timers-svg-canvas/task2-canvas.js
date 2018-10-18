'use strict';

const baseRadius = 500;
const circleRadius = 30;
const numbersBaseRadius = baseRadius / 2.5;
const hourArrowWidth = 20;
const minuteArrowWidth = 10;
const secondArrowWidth = 2;

const canvas = document.getElementById('canvas');
const container = canvas.getContext('2d');

setInterval(tickTimer, 1000);

function createWatch() {
    canvas.width = baseRadius;
    canvas.height = baseRadius;
    createClockFaceCircle();
    createClockFaceLittleCircles();
}

function createClockFaceCircle() {
    container.beginPath();
    container.arc(baseRadius / 2, baseRadius / 2, baseRadius / 2, 0, Math.PI * 2);
    container.fillStyle = '#48B382';
    container.fill();
    container.closePath();
}

function createClockFaceLittleCircles() {
    for (let number = 1; number <= 12; number++) {
        const angle = number * 30 / 180 * Math.PI;
        const x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
        const y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
        createHourCircle(x, y);
        createHourCircleNumber(x, y, number);
    }
}

function createHourCircle(circleX, circleY) {
    container.beginPath();
    container.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    container.fillStyle = 'green';
    container.fill();
    container.closePath();
}

function createHourCircleNumber(x, y, number) {
    container.beginPath();
    container.fillStyle = 'black';
    container.font = `${circleRadius}px sans-serif`;
    container.textAlign = 'center';
    container.textBaseline = 'middle';
    container.fillText(number, x, y);
    container.closePath();
}

function createHourArrow(width, degree) {
    container.beginPath();
    container.lineWidth = width;
    container.lineCap = 'round';
    container.translate(baseRadius / 2, baseRadius / 2);
    container.moveTo(0, 0);
    container.rotate(degree * Math.PI / 180);
    container.lineTo(0, -baseRadius / 4);
    container.strokeStyle = 'rgba(0, 0, 0, 0.8)';
    container.setTransform(1, 0, 0, 1, 0, 0);
    container.stroke();
    container.closePath();
}

function createMinuteArrow(width, degree) {
    container.beginPath();
    container.lineWidth = width;
    container.lineCap = 'round';
    container.translate(baseRadius / 2, baseRadius / 2);
    container.moveTo(0, 0);
    container.rotate(degree * Math.PI / 180);
    container.lineTo(0, -baseRadius / 3);
    container.strokeStyle = 'rgba(0, 0, 139, 0.8)';
    container.stroke();
    container.setTransform(1, 0, 0, 1, 0, 0);
    container.closePath();
}


function createSecondArrow(width, degree) {
    container.beginPath();
    container.lineWidth = width;
    container.lineCap = 'round';
    container.translate(baseRadius / 2, baseRadius / 2);
    container.moveTo(0, 0);
    container.rotate(degree * Math.PI / 180);
    container.lineTo(0, -baseRadius / 2.5);
    container.strokeStyle = 'red';
    container.stroke();
    container.setTransform(1, 0, 0, 1, 0, 0);
    container.closePath();
}

function createDigitalWatch(rusFormatTime) {
    container.beginPath();
    container.fillStyle = 'black';
    container.font = `${circleRadius}px sans-serif`;
    container.textAlign = 'center';
    container.textBaseline = 'middle';
    container.fillText(rusFormatTime, baseRadius / 2, baseRadius / 2 + baseRadius / 10);
    container.closePath();
}

// Logic

function tickTimer() {
    const now = new Date();
    const thisSecond = now.getSeconds();
    const thisMinute = now.getMinutes();
    const thisHour = now.getHours();
    createWatch();
    updateDigitalWatch(thisHour, thisMinute, thisSecond);
    updateWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
    const thisSecondRotate = (second / 60) * 360;
    const thisMinuteRotate = (minute) / 60 * 360;
    const thisHourRotate = (hour + minute / 60) / 12 * 360;
    createHourArrow(hourArrowWidth, thisHourRotate);
    createMinuteArrow(minuteArrowWidth, thisMinuteRotate);
    createSecondArrow(secondArrowWidth, thisSecondRotate);
}

function updateDigitalWatch(hour, minute, second) {
    return createDigitalWatch(`${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`);
}

function addZeroToNumber(currentTime) {
    return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}