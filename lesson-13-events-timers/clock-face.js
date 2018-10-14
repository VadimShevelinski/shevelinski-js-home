'use strict';

var container = document.getElementById("container");
container.style.position = "relative";
var deg = 360;
var Radius = 120;
var clockFace = document.createElement("div");
clockFace.style.cssText = "position: absolute; width: 300px; height: 300px; border-radius: 50%; zIndex: 1; ";
container.appendChild(clockFace);
var clockFaceCenterX = clockFace.offsetLeft+clockFace.offsetWidth/2;
var clockFaceCenterY = clockFace.offsetTop+clockFace.offsetHeight/2;

var num = 1;
var h = new Date();
var pm = (h.getHours());

if (pm > 12) {
    num += 12;
}
for (var i=30; i<=deg; i+=30) {

    var Angle = i/180*Math.PI;
    var timeCircle = document.createElement("div");
    timeCircle.style.cssText = "position: absolute; width: 40px; height: 40px; background-color: #48B382; border-radius: 50%;" +
        "border: 1px solid blue;";
    container.appendChild(timeCircle);
    var number = document.createElement("span");
    number.style.cssText = "display: block; line-height: 40px; text-align: center; font-size: 18px; height: 100%";
    number.innerHTML = num;
    timeCircle.appendChild(number);
    var Min_CenterX = clockFaceCenterX+Radius*Math.sin(Angle);
    var Min_CenterY = clockFaceCenterY-Radius*Math.cos(Angle);
    timeCircle.style.left=Math.round(Min_CenterX-timeCircle.offsetWidth/2)+'px';
    timeCircle.style.top=Math.round(Min_CenterY-timeCircle.offsetHeight/2)+'px';
    num++;
}

var timeNum = document.createElement("div");
timeNum.style.cssText = "position: absolute; width: 100px;  text-align: center; border: 1px solid red; " +
    "font-weight: bold; font-size: 20px;";
timeNum.style.left = (clockFace.offsetWidth/3) + "px";
timeNum.style.top = (clockFace.offsetHeight/4) + "px";
container.appendChild(timeNum);

var hourHand = document.createElement("div");
hourHand.style.cssText = "border: 4px solid black;  height: 50px; position: absolute; border-radius:5px";
hourHand.style.left = (clockFace.offsetWidth / 2 - 4) + "px";
hourHand.style.top = (clockFace.offsetHeight / 2 - 56) + "px";
container.appendChild(hourHand);

var minuteHand = document.createElement("div");
minuteHand.style.cssText = "border: 2px solid black; height: 100px; position: absolute; border-radius:2px";
minuteHand.style.left = (clockFaceCenterY - 2) + "px";
minuteHand.style.top = (clockFaceCenterX - 104) + "px";
container.appendChild(minuteHand);

var secondHand = document.createElement("div");
secondHand.style.cssText = "border: 1px solid black; border-radius: 1px; height: 150px; position: absolute; border-radius:1px";
secondHand.style.left = (clockFaceCenterY - 1) + "px";
secondHand.style.top = (clockFaceCenterX - 125) + "px";
container.appendChild(secondHand);

hourHand.style.transformOrigin = "50% 56px";
minuteHand.style.transformOrigin = "50% 104px";
secondHand.style.transformOrigin = "50% 125px";
