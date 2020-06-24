var box = document.getElementById("box");
box.style.width = "200px"
box.style.border = "200px"
box.addEventListener("mouseover", mouseOver);
function mouseOver() {
    box.style.backgroundColor = "blue"
}

box.addEventListener("mousedown", mouseDown);
function mouseDown() {
    box.style.backgroundColor = "red"
}
box.addEventListener("mouseup", mouseUp);
function mouseUp() {
    box.style.backgroundColor = "yellow"
}
box.addEventListener("dblclick", dblClick);
function dblClick() {
    box.style.backgroundColor = "green"
}
box.addEventListener("scroll", scrollOrange);
function scrollOrange() {
    box.style.backgroundColor = "orange"
}
box.addEventListener("mouseout", mouseOut);
function mouseOut() {
    box.style.backgroundColor = "white"
}