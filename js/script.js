$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 8,
      loop: true,
      nav: true,
    //   autoplay:true,
      dots : false,
      autoplayTimeout:2000,
      autoplayHoverPause:false,

      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
  });
  
