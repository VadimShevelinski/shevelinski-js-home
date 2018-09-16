'use strict';

//более интересный код
function removeClass(obj, cls){
    let arr = obj.className.split(' ');
    for(let i = 0; i < arr.length; i++){
        let superfluous = arr.length -= 1;
        if(arr[i] === cls){
            arr.splice(1, superfluous);
        }
    }
    obj.className = arr.join(' ');
}
let obj = {
    className: 'open menu menu menu menu menu menu menu menu menu'
};
removeClass(obj, 'menu');
obj.className.replace(/[\s.,%]/g, '');
alert(obj.className);
