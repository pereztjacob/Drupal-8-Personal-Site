(function ($, Drupal) {


  Drupal.behaviors.sliderJs = {
   attach: function (context, settings) {

     $('.view-projects > .view-content', context).once('projectsSliderBehavior').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrow: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              slidesToScroll: 1,
              variableWidth: true,
              autoplay: false,
              autoplaySpeed: 2000,
              arrow: false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              autoplay: false,
              autoplaySpeed: 2000,
              arrow: false,
              dots: true
            }
          }
        ]
     });
   }
 };


}(jQuery, Drupal));
