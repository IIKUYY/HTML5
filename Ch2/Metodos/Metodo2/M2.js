window.addEventListener('DOMContentLoaded', function() {
  var isCanvasTextSupported = supportsCanvasText();
    if (isCanvasTextSupported) {
      document.write("El navegador soporta texto en canvas.");
    } else {
      document.write("El navegador no soporta texto en canvas.");
    }
  });

  function supportsCanvasText() {
  if (!supportsCanvas()) { return false; }
  var dummy_canvas = document.createElement('canvas');
  var context = dummy_canvas.getContext('2d');
  return typeof context.fillText == 'function';
}
function supportsCanvas() {
  return !!document.createElement('canvas').getContext;
}