/*jshint esversion: 6 */ 
$(document).ready( function() {
  
  // parallax
  if (window.innerWidth > 991) {
    let parallax = (block, block_2, num = -150) => {
      $(block).mousemove(function(e) {
        parallaxIt(e, block_2, num);
      });
      
      function parallaxIt(e, target, movement) {
        var $this = $(block);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
      
        TweenMax.to(target, 1, {
          x: (relX - $this.width() / 2) / $this.width() * movement,
          y: (relY - $this.height() / 2) / $this.height() * movement
        });
      }
    }
    parallax(".s-bitacora", ".stars-bg");
    parallax(".s-bitacora", ".radiance-bg", '-90');
    parallax(".s-bitacora", ".portfolio-wrap", '-60');
    parallax(".s-orbita", ".stars-bg");
    parallax(".s-orbita", ".popover-block", '-60');
    parallax(".s-trayectos", ".stars-bg");
    parallax(".s-trayectos", ".tr-bg", '-60');
    parallax(".main-foot", ".stars-bg");
    
    
  }  
  if (window.innerWidth < 991) {
    // hamburger
    $(".hamburger-btn").click(function() {
      if (!$(".head-mnu-wrap").hasClass("mnu-active")) {
        $(".head-mnu-wrap").addClass("mnu-active");
        $(".nav-mnu").fadeIn();
      } else {
        $(".head-mnu-wrap").removeClass("mnu-active");
        $(".nav-mnu").fadeOut();
      }
    });
    
  } else {
    // hamburger
    $(".hamburger-btn").click(function() {
      if (!$(".head-mnu-wrap").hasClass("mnu-active")) {
        $(".head-mnu-wrap").addClass("mnu-active");
      } else {
        $(".head-mnu-wrap").removeClass("mnu-active");
      }
    });
  }

  // more project
  $(".more-btn a").click( (e)=> {
    e.preventDefault();
    $("#more-project").removeClass("more-project");
  });

  

  // top-video
  setTimeout( () => {
    $(".main-head").removeClass("video-top-play");
    $(".video-wrap").addClass("video-hidden");
  }, 11000);

  // video
  function findVideos() {
    let videos = document.querySelectorAll(".portfolio-button");
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    let id = video.getAttribute("data-video-id"),
      emb = document.getElementById("video-emb");
    
    video.addEventListener('click', () => {
      let iframe = createIframe(id);
      emb.appendChild(iframe);
      toggleCls();
    });
  }
  function toggleCls() {
    let bl =  $(".video-play-block");
    if ( !bl.hasClass("video-play-block-hidden")) {
      bl.addClass("video-play-block-hidden");
      $("#video-emb iframe").remove();
    } else {
      bl.removeClass("video-play-block-hidden");
    }
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; fullscreen;');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video-embed');
    return iframe;
  }

  function generateURL(id) {
    let getPar = '?loop=1&muted=1';
    return id + getPar;
  }

  findVideos();

  $(".video-closed").click(() => {
    toggleCls();
  });

  // scroll id
  var $page = $('html, body');
  $('.nav-mnu a[href*="#"]').click(function (e) {
    e.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    if (window.innerWidth < 991) {
      // hamburger
      if (!$(".head-mnu-wrap").hasClass("mnu-active")) {
        $(".head-mnu-wrap").addClass("mnu-active");
        $(".nav-mnu").fadeIn();
      } else {
        $(".head-mnu-wrap").removeClass("mnu-active");
        $(".nav-mnu").fadeOut();
      }
    }
  });
  $('.head-content-wrap a[href*="#"]').click(function (e) {
    e.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
  });
  
  $(".foot-form").on("submit", function(e) {
    let str = $(this).serialize();
    e.preventDefault();
    
    $.ajax({
      type: 'POST',
      url: './php/contact.php',
      data: str,
      success: function(msg) {
        console.log(msg);
        if (msg == "OK") {
          $(".foot-form")[0].reset();
          $(".form-content-wrap").addClass("form-send");
        } else {
          alert("error send server");
        }                   
      },
      error: function(msg) {
        console.log(msg);
        alert("error!")
      }
    });
  });

  // portfolio popup
  $(".project-item > div").click( function() {
    $(".project-popup-block").addClass("project-popup-hidden");
    let id = $(this).attr("id");
    if (!id) return; 
    $("." + id).removeClass("project-popup-hidden");
  });
  $(".project-closed").click( function() {
    $(".project-popup-block").addClass("project-popup-hidden");
  });
    
});
