function lookupLocation() {
  getCurrentPosition(showMap, showMapError);
}

function showMap(loc) {
  var map = new GMap2(document.getElementById("geoWrapper"));
  var center = new GLatLng(loc.coords.latitude, loc.coords.longitude);
  map.setCenter(center, 14);
  map.addControl(new GSmallMapControl());
  map.addControl(new GMapTypeControl());
  map.addOverlay(
    new GMarker(center, {
      draggable: false,
      title: "You are here (more or less)",
    })
  );
}

function showMapError() {
  $("#index").html("Unable to determine your location.");
}
