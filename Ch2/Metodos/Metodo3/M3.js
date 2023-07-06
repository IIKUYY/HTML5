function supportsH264BaselineVideo() {
  if (!supportsVideo()) { return false; }
    var v = document.createElement("video");
    return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
  }
function supportsVideo() {
  return !!document.createElement("video").canPlayType;
}
if (supportsH264BaselineVideo()) {
  document.write("video H.264 Baseline tiene soporte");
} else {
  document.write("video H.264 Baseline no tiene soporte");
}