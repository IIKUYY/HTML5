function supportsGeolocation() {
    return 'geolocation' in navigator;
    }
    window.onload = function() {
    if(supportsGeolocation()){
        document.write("geolocation tiene soporte")
    }
    else{
        document.write("geolocation no tiene soporte")
    }
};