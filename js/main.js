(function($, window, document, undefined) {
  // Initializing function
  var moomjy_js = {
    init: function () {
      moomjy_js.carouselHandler();
      moomjy_js.carouselInit();
      moomjy_js.formInit();

      moomjy_js.overlayHandler();

      moomjy_js.clickHandler();

      moomjy_js.scrollMagic();
      moomjy_js.smoothScroll(window.location.hash);

    },
    clickHandler: function () {
      // Toggle the navigation on click of hamburger menu class
      $('.mobile.toggle').on('click', function () {
        moomjy_js.navigationToggle(this);
      });
      // Animate scroll to top on click of top element
      $('a').on('click', function(event) {
        if (/\/#/.test($(this).prop('href')) && window.location.pathname === '/') {
          event.preventDefault();
          moomjy_js.smoothScroll($(this).prop('hash'));
          window.history.pushState({},"", $(this).prop('href'));
        }
      });

      $('.overlay .close').on('click', function() {
        moomjy_js.overlayToggle();
      });

    },
    navigationToggle: function ($this) {
      $($this).toggleClass('active');
      $('nav .navigation-list').toggleClass('active');
    },
    overlayToggle: function () {
      $('.overlay').toggleClass('active');
      $('body').toggleClass('noscroll');
    },
    videoHandler: function ($src) {
      $('.overlay video').src = $src;
      $('.overlay video').load();
    },
    overlayHandler: function () {
      $('.item.slick-active .play svg').on('click', function() {
        moomjy_js.videoHandler($(this).data('src'));
        moomjy_js.overlayToggle();
      });
    },
    scrollMagic: function () {
      var $controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

      new ScrollMagic.Scene({triggerElement: "#about"})
          .setTween("#home > .background", {y: "50%", ease: Linear.easeNone})
          .addTo($controller);
    },
    smoothScroll: function ($this) {
      if ($this) {
        $offset = $($this).offset();
        $('html, body').animate({
          scrollTop: $offset.top,
        }, 1000);
      }
    },
    carouselHandler: function () {
      $('.carousel')
        .on('init', function(event, slick){
          $('.slick-active').prev().addClass('prev');
          $('.slick-active').next().addClass('next');
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.slick-slide').removeClass('prev next');
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
          $('.slick-active').prev().addClass('prev');
          $('.slick-active').next().addClass('next');
          moomjy_js.overlayHandler();
        });
    },
    carouselInit: function () {
      $args = {
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30%',
        dots: true,
        speed: 300,
        arrows: true,
        customPaging: function(slider, i) {
          var thumb = $(slider.$slides[i]).data();
          return '<span>&mdash;</span>';
        },
        responsive: [
          {
            breakpoint: 769,
            settings: {
              centerPadding: '0',
            }
          }
        ],

      };
      $('.carousel').slick($args);
    },
    formInit: function () {
      $( ".datepicker input" ).datepicker({
        buttonImage: "/images/calendar-icon.png",
        autoSize: true,
        showOn: "both"
      });
    }
  };
  moomjy_js.init();

})(jQuery, window, document);
