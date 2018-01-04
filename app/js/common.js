$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
	
	
	$(document).ready(function(){

		$('.banner').slick({
			infinite: true,
			speed: 2000,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 9000,
		});
	});
	

	$(".s-carus-partners .partners").owlCarousel({
		loop:true,
		autoplay:true,
		margin: 60,
		responsive:{
				0:{
						items:2,
				},
				520:{
						items:3,
				},
				560:{
						items:3,
				},
				768:{
						items:5,
				},
				992:{
						items:5,
				},
				1200:{
						items:5,
				}
		}
	});

	/*$(document).ready(function () {
		var offset = $('#fixed').offset();
		var topPadding = 0;
		$(window).scroll(function() {
			if ($(window).scrollTop() > offset.top) {
				$('#fixed').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
			}
			else {
				$('#fixed').stop().animate({marginTop: 0});
			}
		});
	});*/

	

	function heightses() {
		$(".s-vakan .vak-basis .vak-contant .bord").height('auto').equalHeights();
		$(".s-kareer .k-basis .kar-head").height('auto').equalHeights();
		$(".s-team .team-content .team-item").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});
	heightses();
	
	
	
	
	

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

	$(".s-adv ").waypoint(function() {  
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s-slider .banner-top .box .banner-text p span").css({ 
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-slider .banner-top .box .banner-text p span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200); 
		});
		this.destroy();

	}, {
		offset: '90%' 
	});

	$(".portfolio-item").each(function(e) {

		var th = $(this);

		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
				.attr("id", "portfolio-img-" + e);

	});
	$(".portfolio-item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	$(".callback-wrap1").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
	$(".callback-wrap2").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
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
