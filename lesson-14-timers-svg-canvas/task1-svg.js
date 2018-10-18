'use strict';

const baseRadius = 500; // радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; // радиус оси цифр циферблата
const circleRadius = 30; // радиус кружков с цифрами
const dotSize = 14; //размер точки в центре часов


const body = document.getElementsByTagName('body')[0];
body.appendChild(createWatch());

setInterval(tickTimer, 1000);

function createWatch() {
    let base = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    base.id = 'base';
    base.setAttribute('width', baseRadius);
    base.setAttribute('height', baseRadius);
    base.appendChild(createClockFace());
    base.appendChild(createClockFaceLittleCircles());
    base.appendChild(createDigitalWatch());
    base.appendChild(createHourArrow());
    base.appendChild(createMinuteArrow());
    base.appendChild(createSecondArrow());
    base.appendChild(createDecorativeDot(dotSize));
    return base;
}

function createClockFace() {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', baseRadius / 2);
    circle.setAttribute('cy', baseRadius / 2);
    circle.setAttribute('r', baseRadius / 2);
    circle.setAttribute('fill', '#48B382');
    return circle;
}

function createClockFaceLittleCircles() {
    let clockFace = document.createDocumentFragment();
    for (let number = 1; number <= 12; number++) {
        const angle = number * 30 / 180 * Math.PI;
        const x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
        const y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
        clockFace.appendChild(createHourCircle(x, y));
        clockFace.appendChild(createHourCircleNumber(x, y, number));
    }
    return clockFace;
}

function createHourCircle(circleX, circleY) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', circleX);
    circle.setAttribute('cy', circleY);
    circle.setAttribute('r', circleRadius);
    circle.setAttribute('fill', 'green');
    return circle;
}

function createHourCircleNumber(x, y, number) {
    const hourTime = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    hourTime.innerHTML = number;
    hourTime.setAttribute('x', x);
    hourTime.setAttribute('y', y);
    hourTime.setAttribute('fill', 'black');
    hourTime.setAttribute('font-size', `${circleRadius}px`);
    hourTime.setAttribute('text-anchor', 'middle');
    hourTime.setAttribute('alignment-baseline', 'central');
    return hourTime;
}

function createDigitalWatch() {
    const textClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textClock.setAttribute('x', baseRadius / 2);
    textClock.setAttribute('y', baseRadius / 2 + baseRadius / 10);
    textClock.setAttribute('fill', 'black');
    textClock.setAttribute('font-size', circleRadius);
    textClock.setAttribute('text-anchor', 'middle');
    textClock.id = 'text-clock';
    return textClock;
}

function createHourArrow() {
    let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrow.setAttribute('x1', baseRadius / 2);
    arrow.setAttribute('y1', baseRadius / 2);
    arrow.setAttribute('x2', baseRadius / 2);
    arrow.setAttribute('y2', baseRadius / 4);
    arrow.setAttribute('stroke', 'black');
    arrow.setAttribute('stroke-width', 20);
    arrow.setAttribute('stroke-linecap', 'round');
    arrow.id = 'hours';
    return arrow;
}

function createMinuteArrow() {
    let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrow.setAttribute('x1', baseRadius / 2);
    arrow.setAttribute('y1', baseRadius / 2);
    arrow.setAttribute('x2', baseRadius / 2);
    arrow.setAttribute('y2', baseRadius / 6);
    arrow.setAttribute('stroke', 'darkblue');
    arrow.setAttribute('stroke-width', 10);
    arrow.setAttribute('stroke-linecap', 'round');
    arrow.id = 'minutes';
    return arrow;
}

function createSecondArrow() {
    let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrow.setAttribute('x1', baseRadius / 2);
    arrow.setAttribute('y1', baseRadius / 2);
    arrow.setAttribute('x2', baseRadius / 2);
    arrow.setAttribute('y2', baseRadius / 10);
    arrow.setAttribute('stroke', 'red');
    arrow.setAttribute('stroke-width', 2);
    arrow.setAttribute('stroke-linecap', 'round');
    arrow.id = 'seconds';
    return arrow;
}

function createDecorativeDot(size){
    let dot = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    dot.setAttribute('x', baseRadius / 2 + (size / 2));
    dot.setAttribute('y', baseRadius / 2);
    dot.setAttribute('stroke-width', size);
    return dot;
}

// Logic

function tickTimer() {
    let now = new Date();
    let thisSecond = now.getSeconds();
    let thisMinute = now.getMinutes();
    let thisHour = now.getHours();
    updateWatch(thisHour, thisMinute, thisSecond);
    updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
    let thisSecondRotate = (second / 60) * 360;
    let thisMinuteRotate = (minute) / 60 * 360;
    let thisHourRotate = (hour + minute / 60) / 12 * 360;
    rotateHandle('seconds', thisSecondRotate);
    rotateHandle('minutes', thisMinuteRotate);
    rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
    let arrow = document.querySelector(`#${handle}`);
    arrow.setAttribute('transform', `rotate(${degree},${baseRadius / 2},${baseRadius / 2})`);
}

function updateDigitalWatch(hour, minute, second) {
    let textClock = document.getElementById('text-clock');
    textClock.innerHTML = `${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`;
}

function addZeroToNumber(currentTime) {
    return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}