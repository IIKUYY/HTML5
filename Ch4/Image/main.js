var canvas = document.getElementById("img");
var context = canvas.getContext("2d");
var cat = new Image();
cat.src =
  "http://diveintohtml5.info/i/openclipart.org_media_files_johnny_automatic_1360.png";
cat.onload = function () {
  context.drawImage(cat, 0, 0);
};
