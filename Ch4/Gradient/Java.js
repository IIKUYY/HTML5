var canvas = document.getElementById("grh"); //Horizontal
var context = canvas.getContext("2d");
var myGradient = context.createLinearGradient(0, 0, 300, 0);
myGradient.addColorStop(0, "black");
myGradient.addColorStop(1, "white");
context.fillStyle = myGradient;
context.fillRect(0, 0, 300, 225);

var canvas = document.getElementById("grv"); //Vertical
var context = canvas.getContext("2d");
var myGradient = context.createLinearGradient(0, 0, 0, 225);
myGradient.addColorStop(0, "black");
myGradient.addColorStop(1, "white");
context.fillStyle = myGradient;
context.fillRect(0, 0, 300, 225);

var canvas = document.getElementById("grd");  //Diagonal
var context = canvas.getContext("2d");
var myGradient = context.createLinearGradient(0, 0, 300, 225);
myGradient.addColorStop(0, "black");
myGradient.addColorStop(1, "white");
context.fillStyle = myGradient;
context.fillRect(0, 0, 300, 225);