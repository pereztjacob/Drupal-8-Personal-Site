(function ($, Drupal) {

  Drupal.behaviors.boostrapTheme = {
   attach: function(context, settings) {

     $(document).ready(function() {
       console.log('init...');

       $("a").on('click', function(event) {

         if (this.hash !== "") {

           event.preventDefault();

           var hash = this.hash;

           $('html, body').animate({
             scrollTop: $(hash).offset().top
           }, 100, function(){

             window.location.hash = hash;
           });
         } // End if
      });

     }); // end ready
   }
 };

}(jQuery, Drupal));
