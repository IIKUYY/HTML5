function incrementClick() {
    updateDisplay(++counterVal);
    localStorage.setItem("counterValue", counterVal);
  }
  
  function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
    localStorage.setItem("counterValue", counterVal);
  }
  
  function updateDisplay(val) {
    document.getElementById("label").innerHTML = val;
  }
  
  var counterVal = parseInt(localStorage.getItem("counterValue")) || 0;
  updateDisplay(counterVal);
  