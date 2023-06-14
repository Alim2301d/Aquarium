$(document).ready(function () {
  $('#all').on("click", function () {
    $('#a').show();
    $('#b').show();
    $('#c').show();
    $('#d').show();
    $('#e').show();
    $('#f').show();
    $('#g').show();
    $('#h').show();
  });

  $('#sharks').on("click", function () {
    $('#a').show();
    $('#b').hide();
    $('#c').hide();
    $('#d').hide();
    $('#e').hide();
    $('#f').hide();
    $('#g').hide();
    $('#h').hide();
  });

  $('#dolphins').on("click", function () {
    $('#a').hide();
    $('#b').show();
    $('#c').hide();
    $('#d').hide();
    $('#e').hide();
    $('#f').hide();
    $('#g').hide();
    $('#h').hide();
  });

  $('#penguins').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').show();
    $('#d').hide();
    $('#e').hide();
    $('#f').hide();
    $('#g').hide();
    $('#h').hide();
  });
  $('#turtles').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').hide();
    $('#d').show();
    $('#e').hide();
    $('#f').hide();
    $('#g').hide();
    $('#h').hide();
  });
  $('#Whales').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').hide();
    $('#d').hide();
    $('#e').show();
    $('#f').hide();
    $('#g').hide();
    $('#h').hide();
  });
  $('#Octopus').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').hide();
    $('#d').hide();
    $('#e').hide();
    $('#f').show();
    $('#g').hide();
    $('#h').hide();
  });
  $('#JellyFish').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').hide();
    $('#d').hide();
    $('#e').hide();
    $('#f').hide();
    $('#g').show();
    $('#h').hide();
  });
  $('#RayFish').on("click", function () {
    $('#a').hide();
    $('#b').hide();
    $('#c').hide();
    $('#d').hide();
    $('#e').hide();
    $('#f').hide();
    $('#g').hide();
    $('#h').show();
  });
});