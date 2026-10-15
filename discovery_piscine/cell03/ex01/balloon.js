const balloon =document.getElementById("balloon");
const colors = ["red","green","blue"];
let size = 200;
let color = 0;

function update(){
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
}

balloon.onclick = function(){
    size = size + 10;
    if (size > 420) size = 200;
    color = (color + 1) % 3;
    update();
}

balloon.onmouseleave = function (){
    size = Math.max( 200 , size - 5);
    color = (color + 2) % 3;
    update();
}