/*jshint esversion: 6 */
$(document).ready(function () {

  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3($(".4-1").l("1-b")){$(m).k(9(e){3(!$(\'.4-1\').j(e.a)&&$(\'.4-1\').g(e.a).i===0){$(\'.4-1\').f("1-b")}})}c 7=0;$(p).8(9(u){c 5=$(n).t(),d=$("#r").s().2-q;3(d<5){3(5>7){$(\'.2-6\').f(\'2-6-8\')}o{$(\'.2-6\').h(\'2-6-8\')}}7=5});',31,31,'|mnu|top|if|block|st|line|lastScrollTop|scroll|function|target|hidden|var|block_pos||addClass|has|removeClass|length|is|mouseup|not|document|this|else|window|100|companies|offset|scrollTop|event'.split('|'),0,{}))

  // text-left 
  $(".scroll-left").each(function () {
    var controller1 = new ScrollMagic.Controller();
    var textAnimation_1 = new TimelineMax()
      .fromTo(this, 1, {
        x: "0%"
      }, {
        x: "250%",
        ease: Linear.easeNone
      })

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      duration: "200%"
    }).setTween(textAnimation_1).addTo(controller1);
    // }).setTween(textAnimation_1).addIndicators().addTo(controller1);
  });

  // text-right
  $(".scroll-right").each(function () {
    var controller2 = new ScrollMagic.Controller();
    var textAnimation_2 = new TimelineMax()
      .fromTo(this, 1, {
        x: "0%"
      }, {
        x: "-200%",
        ease: Linear.easeNone
      })

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      duration: "200%"
    }).setTween(textAnimation_2).addTo(controller2);
  });


  // contact right
  $(function () {
    var controller3 = new ScrollMagic.Controller();
    var textAnimation_3 = new TimelineMax()
      .fromTo(".scroll-right-contact", 1, {
        x: "120%"
      }, {
        x: "0%",
        ease: Linear.easeNone
      })
    if (window.innerWidth > 767) {
      new ScrollMagic.Scene({
        triggerElement: "#contact",
        triggerHook: 0.7,
        duration: "45%"
      }).setTween(textAnimation_3).addTo(controller3);
    } else {
      new ScrollMagic.Scene({
        triggerElement: "#contact",
        triggerHook: 0.7,
        duration: "35%"
      }).setTween(textAnimation_3).addTo(controller3);
    }
  });

  // scroll id
  var $page = $('html, body');
  $('.nmu-list a[href*="#"], .menu a[href*="#"]').click(function (e) {
    e.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
  });

  // menu click humburger
  $(".hamburger-block").click( function() {
    $(".block-mnu").removeClass("mnu-hidden");
  });
  
  $(".mnu-closed").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });

  $(".menu a").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });
  
  
  // menu item hover

  /**
 * demo-ama.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	const items = Array.from(document.querySelectorAll('.menu a'));

	class Item {
		constructor(el) {
			this.DOM = {};
			this.DOM.el = el;
			this.DOM.name = el.querySelector('.menu a span');
			charming(this.DOM.name);
			this.DOM.nameLetters = Array.from(this.DOM.name.querySelectorAll('span'));
			this.initEvents();
		}
		initEvents() {
			const duration = 150;

			this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					delay: (t,i) => i*20,
					translateY: [
						{value: (t,i) => i%2===0?10:-10, duration: duration, easing: 'easeInSine'},
						{value: (t,i) => i%2===0?[-10,0]:[10,0], duration: duration+700, easing: 'easeOutElastic', elasticity: 600}
					],
					opacity: [
						{value: 0, duration: duration, easing: 'linear'},
						{value: 1, duration: duration, easing: 'linear'}
					]
				});
			}, 50);

			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( !this.isActive ) return;
				this.isActive = false;

				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					delay: (t,i,l) => (l-i-1)*20,
					translateY: [
						{value: (t,i) => i%2===0?-10:10, duration: duration, easing: 'easeInSine'},
						{value: (t,i) => i%2===0?[10,0]:[-10,0], duration: duration+700, easing: 'easeOutElastic', elasticity: 600}
					],
					opacity: [
						{value: 0, duration: duration, easing: 'linear'},
						{value: 1, duration: duration, easing: 'linear'}
					]
				});
			};

			this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
		}
	};

	items.forEach(item => new Item(item));
};

  // effect animation images
  {
    const galleryItems = Array.from(document.querySelectorAll('.team-item-photo-img'));
    const piecesObjs = [];
    let current = 0; // number img
    let isAnimating = false;
    let fx = 1; //number anim
    let number_ls = [],//array anim
    teamItems = document.getElementsByClassName("team-item").length; 

    // поділення картинки
    galleryItems.forEach((item) => {
      piecesObjs.push(new Pieces(item, {
        pieces: {rows: 6, columns: 3},
        delay: [0,175]
      }));
    });

    // scroll to show
    $(window).scroll(function(){
      let st = $(this).scrollTop(); 
      for ( let i = 0; i < teamItems; i++) {
        if ( st > $(".team-item").eq(i).offset().top - 600 ) {
            navigate(i);
        } 
      }
    });

    const navigate = (pos) => {
      if ( number_ls[pos] === 1 ) {
        return false;
      }
      number_ls[pos] = 1;
      // console.log(number_ls);
      isAnimating = true;
      
      piecesObjs[pos].pieces.forEach((piece) => {
        piece.style.opacity = 0;
        piece.style.transform = `translateX(${pos > current ? anime.random(-1500,-1000) : anime.random(1000,1500)}px) translateY(${piece.dataset.row < piecesObjs[pos].getTotalRows()/2 ? anime.random(-100,-50) : anime.random(50,100)}px)`;
      });

      //show images
      galleryItems[pos].style.opacity = 1;
      piecesObjs[pos].animate({
        duration: 500,
        easing: 'easeInOutQuint',
        delay: (t,i,l) => {
            return parseInt(t.dataset.column) + parseInt(t.dataset.delay);	
        },
        translateX: 0,
        translateY: 0,
        opacity: 1,
        complete: () => {
          galleryItems[pos].classList.add('item-photo-show');
        }
      });
    };

  }

  AOS.init({
    offset: 10
  });


});