$(document).ready(function(){
   $('#all').on("click", function (){
    $('#a').show();
     $('#b').show();
     $('#c').show();
   });

   $('#sharks').on("click", function (){
    $('#a').show();
     $('#b').hide();
     $('#c').hide();
     $('#d').hide();
     $('#e').hide();
     $('#f').hide();
     $('#g').hide();
     $('#h').hide();
   });

   $('#dolphins').on("click", function (){
    $('#a').hide();
     $('#b').show();
     $('#c').hide();
   });

   $('#penguins').on("click", function (){
    $('#a').hide();
     $('#b').hide();
     $('#c').show();
   });
});