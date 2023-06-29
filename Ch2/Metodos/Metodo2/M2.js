window.addEventListener('DOMContentLoaded', function() {
    var isCanvasTextSupported = supports_canvas_text();
  
    if (isCanvasTextSupported) {
      document.write("El navegador soporta texto en canvas.");
    } else {
      document.write("El navegador no soporta texto en canvas.");
    }
  });
function supports_canvas_text() {
    if (!supports_canvas()) { return false; }
    var dummy_canvas = document.createElement('canvas');
    var context = dummy_canvas.getContext('2d');
    return typeof context.fillText == 'function';
  }
  function supports_canvas() {
    return !!document.createElement('canvas').getContext;
  }