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

box.addEventListener("keypress", function(){
    if(event.which === 82){
    box.style.backgroundColor = "red"
    }
})

/*
document.addEventListener('keypress', function(e){
    console.log(e.keyCode)
})
event.code for the letters
*/