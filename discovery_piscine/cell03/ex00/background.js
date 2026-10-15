function ramdonColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

document.getElementById("button").addEventListener("click", function() {
    document.body.style.backgroundColor = ramdonColor();
});