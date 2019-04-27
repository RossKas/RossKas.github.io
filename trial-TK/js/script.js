/*jshint esversion: 6 */
$(document).ready(function () {

    // mobile-menu
    $(".navbar-toggler").click(() => {
        $("#navbarNavDropdown").slideToggle();
    });

    $('.block-left-text').mouseover(function() {
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
                two_mnu = $(".s-offers-sol").offset().top - 44;
            if (scrollTop >= two_mnu) {
                $(".offer-top").addClass("mnu-fixed");
            } else {
                $(".offer-top").removeClass("mnu-fixed");
            }
        });
        
	}
	if ($("body").hasClass('load-src')) {
		$('footer').after('<script src="./js/libs.js"></script>');
	} else {
		$('footer').after('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js"></script>');
	}

    // scroll id
    var $page = $('html, body');
    $('.get-full-btn[href*="#"]').click(function (e) {
        e.preventDefault();
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
    });

    if (window.innerWidth > 991) {
		// Returns true if the specified element has been scrolled into the viewport.
		function isElementInViewport(elem) {
			var $elem = $(elem);
			// Get the scroll position of the page.
			var scrollElem = 'html';
			var viewportTop = $(scrollElem).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			
			// Get the position of the element on the page.
			var elemTop = Math.round( $elem.offset().top );
			var elemBottom = elemTop + $elem.height();
			
			return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
		}

		var allowCounterAnimation = true;
		var counter = {
			clean : {
				el: $('#clr .numbr'),
				from: 0,
				to: 3467,
				val: 0
			},
			infected: {
				el: $('#inf .numbr'),
				from: 0,
				to: 467,
				val: 0
			}
		};
		function countersAnimation() {
			TweenMax.fromTo(counter.clean, 2, { val : counter.clean.from }, { val : counter.clean.to, onUpdate: function () { counter.clean.el.text(Math.ceil(counter.clean.val)); }, ease: Sine.easeOut });
			TweenMax.fromTo(counter.infected, 2, { val : counter.infected.from }, { val : counter.infected.to, onUpdate: function () { counter.infected.el.text(Math.ceil(counter.infected.val)); }, ease: Sine.easeOut });
		}

			var setIntervalDemoAnimationId;
			var isExistSetIntervalDemoAnimationId = false;
			function demoAnimation() {
				$('#scanned-files').each(function () {
					$(this).prop('Counter', 0).animate(
					{
						Counter: $(this).text()
					},
					{
						duration: 10000,
						easing: 'linear',
						step: function (now) {
							$(this).text(Math.ceil(now));
							var percents = Math.ceil(now)/1234*100;
							$('#scan-progress-percents').text(Math.round(percents) + '%');
							$('#scan-progressbar>div').css('width', percents + '%');
							var paths = [
							'C:\\Windows\\antivirus\\antimalware\\secure.dll',
							'C:\\Windows 10\\Windows Virus\\malware.dll',
							'C:\\Win10\\Win64\\Software\\Security\\protect.pc',
							'C:\\Windows\\System\\Safe\\fix my pc',
							'C:\\Windows\\System\\Computer\\update.dll.mui',
							'C:\\PC User\\Computer\\Anti-malware\\online\\pc tweeking',
							'C:\\Program Antimalware\\Protect Files',
							'C:\\Remove Adware\\Win64\\Malware\\Removal',
							'C:\\Win32\\Gridinsoft\\Software\\Speed up pc',
							'C:\\Restore Documents\\Keep clean\\anti-adware\\Internet Explorer',
							'C:\\Chrome\\plugins\\Remove\\detect spyware',
							'C:\\Gridinsoft Trojan Remover\\virus',
							'C:\\anti-ransomware\\fix my computer\\remove',
							'C:\\PC User\\Clean\\rootkit\\remove malware Chrome',
							'C:\\Computer\\Adware\\Cleaner\\chrome',
							'C:\\antivirus\\install\\free\\pc',
							'C:\\ad blocker\\anti rootkit\\remove\\ads',
							'C:\\adware cleaner\\download\\free',
							'C:\\Remove ad\\anti trojan',
							'C:\\browser hijacker removal\\free pop up blocker\\stop pop up ads',
							'C:\\IE\\ad blocker download'
							];
							/*$('#scan-path').text('C:\\Program Files\\Adobe In Design CC2015\\Dictionaries\\' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.random()*10));*/
							$('#scan-path').text(paths[Math.floor(Math.random()*paths.length)]);
						}
					}
					);
				});
				
				$('#detect').each(function () {
					$(this).text('0');
					$(this).prop('Counter', 0).delay(1500).animate(
					{
						Counter: 431
					},
					{
						duration: 8000,
						easing: 'swing',
						step: function (now) { $(this).text(Math.ceil(now)); }
					}
					);
				});
			}
		

		// Check if it's time to start the animation.
		function checkIntroAnimations() {
			var $elem = $('#preview');
			if (isElementInViewport($elem)) {
				// Start the animation
				if(allowCounterAnimation) {
					countersAnimation();
					allowCounterAnimation = false;
				}
				$('#preview > img').addClass('riseAnimation');
			} else {
				$('#preview > img').removeClass('riseAnimation');
				allowCounterAnimation = true;
			}
		}
		
		// Check if it's time to start the animation.
		function checkDemoAnimations() {
			var $elem = $('#demonstration');
			if (isElementInViewport($elem)) {
				// Start the animation
				if(!isExistSetIntervalDemoAnimationId) {
					demoAnimation();
					setIntervalDemoAnimationId = setInterval(demoAnimation, 10250);
					isExistSetIntervalDemoAnimationId = true;
				}
				$('#scan-graph').addClass('graphAnimation');
			} else {
				clearInterval(setIntervalDemoAnimationId);
				$('#scanned-files').stop(true, true);
				$('#detect').stop(true, true);
				$('#scan-graph').removeClass('graphAnimation');
				isExistSetIntervalDemoAnimationId = false;
			}
		}

		// Capture scroll events
		$(window).scroll(function(){ checkIntroAnimations(); checkDemoAnimations(); } );
	}


    // catr radio personal card

    $(".radio").click( function() {

        var personal_btn = $('.personal-card .purchase'),
            radio_value = $(this).attr("value");

        switch (radio_value) {
            case '6':
                TextPersonal('3.95', '*AFFORDABLE price');
                personal_btn.attr("href", "https://secure.avangate.com/order/checkout.php?PRODS=4696268&amp;QTY=1&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=1");
                break;
            case '12':
                TextPersonal('2.95', '*save <span class="save_span">$12</span>/year');
                personal_btn.attr("href", "https://secure.avangate.com/order/checkout.php?PRODS=4696269&amp;QTY=1&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=1");
                break;
            case '24':
            
                TextPersonal('1.95', `*save <span class="save_span">$24</span>/year`);
                personal_btn.attr("href", "https://secure.avangate.com/order/checkout.php?PRODS=4696270&amp;QTY=1&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=1");
                break;
            default:
                TextPersonal('1.95', `*save <span class="save_span>$24</span>/year`);
                personal_btn.attr("href", "https://secure.avangate.com/order/checkout.php?PRODS=4696270&amp;QTY=1&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=1");
                break;
        }
        function TextPersonal(price, save_1) {
            $(".personal-card .total_price .price").html(price);
            $(".personal-card .save_st").html(save_1);
           
        }
    });

});

