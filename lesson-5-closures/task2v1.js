'use strict'

//простое решение
function removeClass(obj, cls){
    let arr = obj.className.split(' ', 2);
    delete arr[1];
    obj.className = arr.join(' ');
}
let obj = {
    className: 'open menu menu'
};
removeClass(obj, 'menu');
obj.className.replace(/[\s.,%]/g, '');
alert(obj.className);