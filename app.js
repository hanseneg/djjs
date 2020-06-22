var box = document.getElementById("box");
box.addEventListener("mouseover", mouseOver);
function mouseOver() {
    box.style.color = "blue"
}
box.addEventListener("mousedown", mouseDown);
function mouseDown() {
    box.style.color = "red"
}
box.addEventListener("mouseup", mouseUp);
function mouseUp() {
    box.style.color = "yellow"
}
box.addEventListener("dblclick", dblClick);
function dblClick() {
    box.style.color = "green"
}