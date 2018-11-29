
var x1 = document.getElementById("x");
var y1 = document.getElementById("y");

function refreshCoordinates(e) {
  x1.textContent = "x-coordinate: " + e.clientX;
  y1.textContent = "y-coordinate: " + e.clientY;
}

function reset(e) {
  if(e.keyCode == 67) {
    x1.textContent = "x-coordinate: 0";
    y1.textContent = "y-coordinate: 0";
  }
}


var mouseMovement = document;
mouseMovement.addEventListener('mousemove', refreshCoordinates, false);
mouseMovement.addEventListener('keydown', reset, false)
