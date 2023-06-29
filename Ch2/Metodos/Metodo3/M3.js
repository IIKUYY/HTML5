function supports_h264_baseline_video() {
    if (!supports_video()) { return false; }
    var v = document.createElement("video");
    return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
  }
  function supports_video() {
    return !!document.createElement("video").canPlayType;
  }
  if (supports_h264_baseline_video()) {
    document.write("video H.264 Baseline tiene soporte");
  } else {
    document.write("video H.264 Baseline no tiene soporte");
  }