/*jshint esversion: 6 */
$(document).ready(function () {
  
  if (window.innerWidth > 991) {
    // scroll left/right
    $(function () {

      // text-left 
      var controller1 = new ScrollMagic.Controller();
      var textAnimation_1 = new TimelineMax()
        .fromTo(".clean", 1, {
          x: "0%"
        }, {
          x: "-90%",
          ease: Linear.easeNone
        })

      new ScrollMagic.Scene({
        triggerElement: "#s-clean-pc",
        triggerHook: 0,
        duration: "200%"
      }).setPin("#s-clean-pc").setTween(textAnimation_1).addTo(controller1);

      // text-right
      var controller2 = new ScrollMagic.Controller();
      var textAnimation_2 = new TimelineMax()
        .fromTo(".your-pc", 1, {
          x: "0%"
        }, {
          x: "140%",
          ease: Linear.easeNone
        })

      new ScrollMagic.Scene({
        triggerElement: "#s-clean-pc",
        triggerHook: 0,
        duration: "200%"
      }).setTween(textAnimation_2).addTo(controller2);

      // keep-well-block
      var controller3 = new ScrollMagic.Controller();
      var textOpacity_1 = new TimelineMax()
        .to(".keep-well-block", 1, {
          autoAlpha: 0,
          ease: Power0.easeNone
        })

      new ScrollMagic.Scene({
        triggerElement: "#s-clean-pc",
        triggerHook: 0,
        duration: "100%"
      }).setTween(textOpacity_1).addTo(controller3);

      // block-top-hidden
      var controller4 = new ScrollMagic.Controller();
      var textOpacity_2 = new TimelineMax()
        .from(".block-top-hidden", 1, {
          autoAlpha: 0,
          ease: Power0.easeNone
        })

      new ScrollMagic.Scene({
        triggerElement: "#s-clean-pc",
        triggerHook: 0,
        duration: "50%"
      }).setTween(textOpacity_2).offset(1000).addTo(controller4);

      // img-leaves
      var controller4 = new ScrollMagic.Controller();
      $(".img-top").each(function () {
        var ourScene = new ScrollMagic.Scene({
            triggerElement: ".color-vis-scroll",
            triggerHook: '2'
          })
          .setClassToggle(this, 'color-vis').addTo(controller4);
      });

    });
  }

  // mobile-menu
  $(".navbar-toggler").click(() => {
    $("#navbarNavDropdown").slideToggle();
  });

  $('.block-left-text').mouseover(function () {
    $('.block-left-text').removeClass('text-active');
    $(this).addClass('text-active');
    var blocks = $(this).attr('data-blocks');

    $('.block-screen-item').not('[data-blocks=" + blocks + "]').removeClass('block-screen-item-active');
    $(".block-screen-item[data-blocks=" + blocks + "]").addClass('block-screen-item-active');

  });

  // two menu
  if (window.innerWidth > 991) {
    $('body').addClass("load-src");
    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop(),
        two_mnu = $(".offers-sol").offset().top - 44;
      if (scrollTop >= two_mnu) {
        $(".offer-top").addClass("mnu-fixed");
      } else {
        $(".offer-top").removeClass("mnu-fixed");
      }
    });

  }
  if (window.innerWidth > 480) {
    $('.scan-block').prepend('<img src="./img/scan.jpg" alt="Gridinsoft Scan">');
  } else {
    $('.scan-block').prepend('<img src="./img/scan-mob.jpg" alt="Gridinsoft Scan">');
  }

  // scroll id
  var $page = $('html, body');
  $('.to-get-License[href*="#"], .link-page[href*="#"], .title-hidden a[href*="#"]').click(function (e) {
    e.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
  });



  if (window.innerWidth > 768) {
    /* img left */
    var owl_img_left = $('.slider-wrap-left');
    owl_img_left.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'slideOutLeft',
      animateIn: 'slideInLeft',
    });


    var owl = $('.general_block');
    owl.owlCarousel({
      items: 1,
      loop: true,
      rewind: false,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar
    });

    var owl_text = $('.slider-text');
    owl_text.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number big */
    var owl_num_big = $('.slider-num-big');
    owl_num_big.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number small */
    var owl_num_small = $('.slider-num-small');
    owl_num_small.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number next */
    var owl_num_next = $('.slider-num-next');
    owl_num_next.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'slideOutLeft',
      animateIn: 'slideInRight',
    });

    /* Slider img*/
    var owl_img = $('.slider-img');
    owl_img.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      autoplayTimeout: 3000,
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      nav: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });



    function startProgressBar() {
      $(".slide-progress").css({
        width: "100%",
        transition: "width 3000ms"
      });
    }

    function resetProgressBar() {
      $(".slide-progress").css({
        width: 0,
        transition: "width 0s"
      });
    }
  }

  if (window.innerWidth < 768) {

    var owl = $('.general_block');
    owl.owlCarousel({
      items: 1,
      loop: true,
      rewind: false,
      slideTransition: 'linear',
      mouseDrag: false,
      touchDrag: false,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar
    });

    var owl_text = $('.slider-text');
    owl_text.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number big */
    var owl_num_big = $('.slider-num-big');
    owl_num_big.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number small */
    var owl_num_small = $('.slider-num-small');
    owl_num_small.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

    /* Number next */
    var owl_num_next = $('.slider-num-next');
    owl_num_next.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'slideOutLeft',
      animateIn: 'slideInRight',
    });

    /* Slider img*/
    var owl_img = $('.slider-img');
    owl_img.owlCarousel({
      items: 1,
      loop: true,
      slideTransition: 'linear',
      rewind: false,
      mouseDrag: false,
      touchDrag: false,
      nav: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
    });

  }
  // Go to the next item
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
    owl_img.trigger('next.owl.carousel');
    owl_text.trigger('next.owl.carousel');
    owl_num_big.trigger('next.owl.carousel');
    owl_num_small.trigger('next.owl.carousel');
    owl_num_next.trigger('next.owl.carousel');
    if (window.innerWidth > 768) {
      owl_img_left.trigger('next.owl.carousel');
    }
  });


  /* Slider you-know*/
  $('.slider-you-know').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false
  });

  // video

  function findVideos() {
    let videos = document.querySelectorAll(".video");

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    let link = video.querySelector('.video-link');
    // let media = video.querySelector('.vide-media');
    let button = video.querySelector('.video-btn');
    let id = "ZvvoZrwfbus";

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video-enabled');
  }


  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video-embed');

    return iframe;
  }

  function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();

});