/*jshint esversion: 6 */ 
$(document).ready( function() {
	
	// mnu-mobile
	$('.mnu-icon').click( () => {
		$(".block-mnu").removeClass("mnu-hidden");
	});
	$('.block-mnu .icon-close').click( () => {
		$(".block-mnu").addClass("mnu-hidden");
	});
	// mnu-kenergylabs
	$('.mnu-kenergylabs').click( (e) => {
		e.preventDefault();
		$(".kenergylabs-wrap").removeClass("kenergylabs-hidden");
		$(".block-mnu").addClass("mnu-hidden");
	});
	$('.kenergylabs .icon-close').click( () => {
		$(".kenergylabs-wrap").addClass("kenergylabs-hidden");
	});

  // scroll id
  var $page = $('html, body');
  $('.scroll-a[href*="#"]').click(function (e) {
    e.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
	});

	if (window.innerWidth > 991) {
		AOS.init({
			offset: 0
		});
	} else {
		AOS.init({
			disable: true
		});
	}
	
	// hidden video

	if ($("body").hasClass("agency")) {
		$(window).scroll(function () {
			var scrollTop = $(this).scrollTop(),
				two_mnu = $(".main-head").offset().top;
			if (scrollTop >= two_mnu) {
				$(".s-video").addClass("video-hidden-b");
			}
		});
		$(".scroll-agency").click( function(e) {
			e.preventDefault();
			$(".s-video").addClass("video-hidden");
		});
		if (window.innerWidth > 991) {
			AOS.init({
				offset: -900
			});
		} else {
			AOS.init({
				disable: true
			});
		}
	}
    
	if (window.innerWidth > 991) {
/**
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
			this.colors = {
				active: window.getComputedStyle(this.DOM.el).getPropertyValue('--menu-item-color')
			};
			charming(this.DOM.name);
			this.DOM.nameLetters = Array.from(this.DOM.name.querySelectorAll('span'));
			this.colors.initial = window.getComputedStyle(this.DOM.nameLetters[0]).color;
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
					],
					color: {
						value: this.colors.active, 
						duration: 1,
						delay:(t,i) => i*20+duration, 
						easing: 'linear'
					}
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
					],
					color: {
						value: this.colors.initial, 
						duration: 1,
						delay:(t,i,l) => (l-i-1)*20+duration, 
						easing: 'linear'
					}
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



/**
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	// Helper vars and functions.
	const extend = function(a, b) {
		for( let key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	};

	// from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = function(ev) {
		let posx = 0;
		let posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) 	{
			posx = ev.pageX;
			posy = ev.pageY;
		}
		else if (ev.clientX || ev.clientY) 	{
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy };
	};

	const TiltObj = function(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.DOM = {};
		this.DOM.img = this.el.querySelector('.effect-img');
		this.DOM.title = this.el.querySelector('.effect-text');
		// this.DOM.img = this.el.querySelector('.img-block-home img');
		// this.DOM.title = this.el.querySelector('.home-block-name');
		this._initEvents();
	}

	TiltObj.prototype.options = {
		movement: {
			img : { translation : {x: -40, y: -40} },
			title : { translation : {x: 20, y: 20} },
		}
	};

	TiltObj.prototype._initEvents = function() {
		this.mouseenterFn = (ev) => {
			anime.remove(this.DOM.img);
			anime.remove(this.DOM.title);
		};
		
		this.mousemoveFn = (ev) => {
			requestAnimationFrame(() => this._layout(ev));
		};
		
		this.mouseleaveFn = (ev) => {
			requestAnimationFrame(() => {
				anime({
					targets: [this.DOM.img, this.DOM.title],
					duration: 1500,
					easing: 'easeOutElastic',
					elasticity: 400,
					translateX: 0,
					translateY: 0
				});
			});
		};

		this.el.addEventListener('mousemove', this.mousemoveFn);
		this.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltObj.prototype._layout = function(ev) {
		// Mouse position relative to the document.
		const mousepos = getMousePos(ev);
		// Document scrolls.
		const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
		const bounds = this.el.getBoundingClientRect();
		// Mouse position relative to the main element (this.DOM.el).
		const relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

		// Movement settings for the animatable elements.
		const t = {
			img: this.options.movement.img.translation,
			title: this.options.movement.title.translation,
		};
			
		const transforms = {
			img : {
				x: (-1*t.img.x - t.img.x)/bounds.width*relmousepos.x + t.img.x,
				y: (-1*t.img.y - t.img.y)/bounds.height*relmousepos.y + t.img.y
			},
			title : {
				x: (-1*t.title.x - t.title.x)/bounds.width*relmousepos.x + t.title.x,
				y: (-1*t.title.y - t.title.y)/bounds.height*relmousepos.y + t.title.y
			}
		};
		this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
		this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
	};

	

	const init = function() {
		imagesLoaded(document.body, () => {
			Array.from(document.querySelectorAll('.effect-block')).forEach(el => new TiltObj(el));
			// Array.from(document.querySelectorAll('.img-block-home')).forEach(el => new TiltObj(el));
		});
	}

	init();
};
	}
    
});
