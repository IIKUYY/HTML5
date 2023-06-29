var i = document.createElement("input");
i.setAttribute("type", "color");
var isColorInputSupported = i.type !== "text";
if (isColorInputSupported) {
    document.write("El input tipo color tiene soporte");
} else {
document.write("El input tipo color no tiene soporte");
}