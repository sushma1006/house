var element = document.querySelector(".door");
element.addEventListener("click", openDoor);

function openDoor() 
{
  element.classList.toggle("doorOpen");
}

var element2 = document.querySelector(".window");
element2.addEventListener("click", togglewindow);

function togglewindow() 
{
  element2.classList.toggle("windowOpen");
}
//window right bottom
var element3 = document.querySelector(".window-right");
element3.addEventListener("click", toggleright);
function toggleright() 
{
  element3.classList.toggle("windowOpen-right");
}

var element4 = document.querySelector(".window-right1");
element4.addEventListener("click", toggleright1);
function toggleright1() 
{
  element4.classList.toggle("windowOpen-right1");
}