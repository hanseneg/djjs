//mouse functions with color changes
var box = document.getElementById("box");
box.style.width = "100%"
box.style.height = "2000px"
window.addEventListener("mouseover", mouseOver);
function mouseOver() {
    box.style.backgroundColor = "blue"
}
window.addEventListener("mousedown", mouseDown);
function mouseDown() {
    box.style.backgroundColor = "red"
}
window.addEventListener("mouseup", mouseUp);
function mouseUp() {
    box.style.backgroundColor = "yellow"
}
window.addEventListener("dblclick", dblClick);
function dblClick() {
    box.style.backgroundColor = "green"
}
window.addEventListener("scroll", scrollOrange);
function scrollOrange() {
    box.style.backgroundColor = "orange"
}
window.addEventListener("mouseout", mouseOut);
function mouseOut() {
    box.style.backgroundColor = "white"
}
//keyboard functions with color changes
box.addEventListener("keypress", function(event){
    if(event.keyCode === 82){
        box.style.backgroundColor = "red"
    }else if(event.keyCode === 66){
        box.style.backgroundColor = "blue"
    }else if(event.keyCode === 89){
        box.style.backgroundColor = "yellow"
    }else if(event.keyCode === 71){
        box.style.backgroundColor = "green"
    }else if(event.keyCode === 79){
        box.style.backgroundColor = "orange"
    }else if(event.keyCode === 87){
        box.style.backgroundColor = "white"
    }
})
