'use strict';

var badY = document.body;
var dragElem = document.getElementById('box');
var elem = dragElem.children;
elem = Array.prototype.slice.call(elem);
var DragImage = null;
var DragShiftX;
var DragShiftY;

function posit() {
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.position = 'absolute';
        elem[i].style.top = 150 + 'px';
        elem[i].style.left = ((i + 1) * 200) + (i * 50) + 'px';
        elem[i].style.width = 200 + 'px';
        elem[i].style.height = 200 + 'px';
    }
}

posit();

badY.onmousedown = DragStart;

function DragStart(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    DragImage = EO.target;
    DragShiftX = EO.pageX - DragImage.offsetLeft;
    DragShiftY = EO.pageY - DragImage.offsetTop;
    DragImage.style.position = "absolute";
    DragImage.style.zIndex = 1000;
    Drag_Move(EO);

    document.onmousemove = Drag_Move;

    function Drag_Move(EO) {
        EO = EO || window.event;
        EO.preventDefault();
        DragImage.style.cursor = "pointer";
        document.body.appendChild(DragImage);
        DragImage.style.top = EO.pageY - DragShiftY + "px";
        DragImage.style.left = EO.pageX - DragShiftX + "px";

    }

    document.onmouseup = Drag_Stop;

    function Drag_Stop() {
        DragImage.style.cursor = "default";
        document.onmousemove = null;
        document.onmouseup = null;
    }

}