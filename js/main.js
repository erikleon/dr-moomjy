(function($, window, document, undefined) {
  // Initializing function
  var moomjy_js = {
    init: function () {


      moomjy_js.carouselHandler();
      moomjy_js.scrollmagic();
      moomjy_js.carouselInit();
      moomjy_js.clickHandler();
    },
    clickHandler: function () {
      // Toggle the navigation on click of hamburger menu class
      $('.mobile.toggle').on('click', function () {
        moomjy_js.navigationToggle(this);
      });
      // Animate scroll to top on click of top element
      $('a').on('click', function(event) {
        console.log('click');
        console.log($(this).prop('href'));
        if (/#/.test($(this).prop('href'))) {
          console.log('hash');
          event.preventDefault();
          moomjy_js.smoothScroll($(this).prop('hash'));
        }
      });

      $('.item.slick-active img').on('click', function() {
        console.log($(this))
        console.log('hehjejhej');
      });

    },
    navigationToggle: function ($this) {
      $($this).toggleClass('active');
      $('nav .navigation-list').toggleClass('active');
    },
    scrollmagic: function () {
      var $controller = new ScrollMagic.Controller();
      // var $pin = new ScrollMagic.Scene({
      //       triggerElement: ".main",
      //       triggerHook: 0,
      //       duration: 0,
      //       offset: 0,
      //       loglevel: 3
      //     })
      //     .setPin("#top-nav")
      //     // .addIndicators({name: "pin (duration: 0)"}) // add indicators (requires plugin)
      //     .addTo($controller);
      // var $scene = new ScrollMagic.Scene({
      //     triggerElement: "#trigger-1",
      //     triggerHook: 0,
      //     duration: 0,
      //     offset: 0,
      //     reverse: true
      //   })
      //   .setTween("#top-nav", 1, {top: "20px"})
      //   .addIndicators({name: "1 (duration: 63)"})
      //   .addTo($controller);


    },
    smoothScroll: function ($this) {
      console.log($($this));
      $offset = $($this).offset();
      console.log($offset);
      $('html, body').animate({
        scrollTop: $offset.top,
      }, 1000);
    },
    carouselHandler: function () {
      $('.carousel')
        .on('init', function(event, slick){
            // let's do this after we init the banner slider

            console.log('slider was initialized');
            $('.slick-active').prev().addClass('prev');
            $('.slick-active').next().addClass('next');
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            // then let's do this before changing slides

            console.log('before change');
            $('.slick-slide').removeClass('prev next');

        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            // finally let's do this after changing slides

            console.log('after change');
            $('.slick-active').prev().addClass('prev');
            $('.slick-active').next().addClass('next');
        });
    },
    carouselInit: function () {
      $args = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        dots: true,
        speed: 300,
        arrows: true,

      };
      $('.carousel').slick($args);
    }
  };
  moomjy_js.init();

  $(window).resize(moomjy_js.scrollmagic());
})(jQuery, window, document);
