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