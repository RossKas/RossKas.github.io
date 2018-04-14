$(function() {
	$(".bs a").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 800);
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
	
	$(".s-adv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".item-content .item-ol h3").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".item-content .item-ol h3").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "2.5125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '20%'
	});

	
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	

	$("body").append('<div class="top"><i class="fa fa-angle-double-up">');
	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});
	

	function heightses() {
		$(".s-services .item-vertical p").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});
	heightses();
	
	
	$(".carousel-eq").owlCarousel({
		loop:true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
				0:{
						items:1, 
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:1,
				},
				992:{
						items:1,
				},
				1200:{
						items:1,
				}
		}
	});
	$(".s-advv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".pricing .item-vertical-2 .item-img span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".pricing .item-vertical-2 .item-img span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "0.9em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '20%'
	});
	$(".portfolio").owlCarousel({
		loop:true,
		responsive:{
				0:{
						items:1, 
				},
				480:{
						items:1,
				},
				520:{
						items:2,
				},
				560:{
						items:2,
				},
				768:{
						items:3,
				},
				992:{
						items:3,
				},
				1200:{
						items:4,
				}
		}
	});
	/*Satisfied customers*/
	$(".coment").owlCarousel({
		loop:true,
		responsive:{
				0:{
						items:1, 
				},
				480:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:1,
				},
				992:{
						items:1,
				},
				1200:{
						items:1,
				}
		}
	});
	/*Footer coment-twiter*/
	$(".coment-twiter").owlCarousel({
		loop:true,
		responsive:{
				0:{
						items:1, 
				},
				480:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:1,
				},
				992:{
						items:1,
				},
				1200:{
						items:1,
				}
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$(".s-blogss").waypoint(function() {
		$('.aboutus').addClass('animated bounceInDown');
		$('.mnu-bar, .home-gallery-wrap').addClass('animated bounceInLeft');
	}, {
		offset: '90%'
	});
	
	$(".s-wide .started").waypoint(function() {
		
		$('.started').addClass('animated bounceInRight');
		$('.carousel-eq').addClass('animated bounceInLeft');
	}, {
		offset: '90%'
	});
	$(".s-news").waypoint(function() {
		$('.new-content').addClass('animated bounceInRight');
	}, {
		offset: '90%'
	});
	$(".s-services .aboutus").waypoint(function() {
		$('.item-vertical').addClass('animated bounceInUp');
	}, {
		offset: '90%'
	});
	$(".s-team .item-vertical-3").waypoint(function() {
		$('.left').addClass('animated bounceInLeft');
		$('.right').addClass('animated bounceInRight');
	}, {
		offset: '90%'
	});
	$(".s-accordion .accordion-content").waypoint(function() {
		$('.accordion-img').addClass('animated bounceInLeft');
		$('.s-accordion .accordion-content .accordion-text').addClass('animated bounceInRight');
	}, {
		offset: '90%'
	});
	$(".s-contact").waypoint(function() {
		$('.s-contact .contact-content h4').addClass('animated bounceInLeft');
		$('.s-contact .contact-content img').addClass('animated bounceInLeft');
		$('.contact-form').addClass('animated bounceInRight');
	}, {
		offset: '90%'
	});
	
	
	$('.sub-menu ul').hide();
	$(".sub-menu a").click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-down fa-caret-right");
	});
	
	//Replace all SVG images with inline SVG
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});
	


});
