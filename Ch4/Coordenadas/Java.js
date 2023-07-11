var canvas = document.getElementById("c"); // Las dos primeras lineas son las necesarias mencionadas anteriormente
var context = canvas.getContext("2d");

for (var x = 0.5; x < 500; x += 10) { // Este pedazo de código es para dibujar la cuadricula
    context.moveTo(x, 0);
    context.lineTo(x, 375);
    context.lineWidth=1;
    context.strokeStyle = "#eee";
    context.stroke();
}

context.beginPath(); // Esta linea es para reiniciar los paths

context.moveTo(0, 40);  // esto dibuja la primera flecha
context.lineTo(240, 40);
context.moveTo(260, 40);
context.lineTo(500, 40);
context.moveTo(495, 35);
context.lineTo(500, 40);
context.lineTo(495, 45);

context.moveTo(60, 0); //Esto dibuja la segunda flecha
context.lineTo(60, 153);
context.moveTo(60, 173);
context.lineTo(60, 375);
context.moveTo(65, 370);
context.lineTo(60, 375);
context.lineTo(55, 370);
context.strokeStyle = "#000";
context.stroke();

context.font = "bold 12px sans-serif"; // Textos de "x" y de "y"
context.fillText("x", 248, 43);
context.fillText("y", 58, 165);

context.textBaseline = "top"; // Texto (0, 0) en la parte superior
context.fillText("( 0 , 0 )", 8, 5);

context.textAlign = "right"; // Text (500, 375) en la parte inferior
context.textBaseline = "bottom";
context.fillText("( 500 , 375 )", 492, 370);
