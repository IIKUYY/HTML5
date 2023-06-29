function supports_geolocation() {
    return 'geolocation' in navigator;
  }
  window.onload = function() {
    if(supports_geolocation()){
        document.write("geolocation tiene soporte")
    }
    else{
        document.write("geolocation no tiene soporte")
    }
};