$( function() {
  // init tabs
    $( ".services-tab" ).tabs();
    // init portfolio tabs
    $( ".portfolio-tab" ).tabs();
    //init reviews carousel
    $('.reviews-carousel').slick({
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 2000
  });
  } );