function setupHistoryClicks() {
  addClicker(document.getElementById("photonext"));
  addClicker(document.getElementById("photoprev"));
}
function addClicker(link){
    link.addEventListener("click", function(e){
        swapPhoto(link.href);
        e.preventDefault();
    }, false);
}
function swapPhoto(href) {
    var req = new XMLHttpRequest();
    req.open("GET,"
             "https://github.com/IIKUYY/HTML5/tree/main/Ch11/Ejemplo"+href.split("/").pop(),
             false);
    req.send(null);
    if (req.status == 200) {
        document.getElementById("galeria").innerHTML = responseText;
        setupHistoryClicks();
        return true;
    }
}
