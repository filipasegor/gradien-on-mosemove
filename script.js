

$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $("h1").css(
    "background-image",
    "radial-gradient(at " +
      mouseXpercentage +
      "% " +
      mouseYpercentage +
      "%, rgba(0,209,255,1), rgba(249,90,0,0.29))"
  );
});
