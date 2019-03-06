const ease = {
    exponentialIn: (t) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialOut: (t) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    },
    exponentialInOut: (t) => {
        return t == 0.0 || t == 1.0 ?
            t :
            t < 0.5 ?
            +0.5 * Math.pow(2.0, (20.0 * t) - 10.0) :
            -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
    },
    sineOut: (t) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
    },
    circularInOut: (t) => {
        return t < 0.5 ?
            0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) :
            0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    },
    cubicIn: (t) => {
        return t * t * t;
    },
    cubicOut: (t) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
    },
    cubicInOut: (t) => {
        return t < 0.5 ?
            4.0 * t * t * t :
            0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    },
    quadraticOut: (t) => {
        return -t * (t - 2.0);
    },
    quarticOut: (t) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    },
}



class ShapeOverlays {
    constructor(elm) {
        this.elm = elm;
        this.path = elm.querySelectorAll('path');
        this.numPoints = 2;
        this.duration = 600;
        this.delayPointsArray = [];
        this.delayPointsMax = 0;
        this.delayPerPath = 200;
        this.timeStart = Date.now();
        this.isOpened = false;
        this.isAnimating = false;
    }
    toggle() {
        this.isAnimating = true;
        for (var i = 0; i < this.numPoints; i++) {
            this.delayPointsArray[i] = 0;
        }
        if (this.isOpened === false) {
            this.open();
        } else {
            this.close();
        }
    }
    open() {
        this.isOpened = true;
        this.elm.classList.add('is-opened');
        this.timeStart = Date.now();
        this.renderLoop();
    }
    close() {
        this.isOpened = false;
        this.elm.classList.remove('is-opened');
        this.timeStart = Date.now();
        this.renderLoop();
    }
    updatePath(time) {
        const points = [];
        for (var i = 0; i < this.numPoints; i++) {
            const thisEase = this.isOpened ?
                (i == 1) ? ease.cubicOut : ease.cubicInOut :
                (i == 1) ? ease.cubicInOut : ease.cubicOut;
            points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
        }

        let str = '';
        str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
        for (var i = 0; i < this.numPoints - 1; i++) {
            const p = (i + 1) / (this.numPoints - 1) * 100;
            const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
            str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
        }
        str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
        return str;
    }
    render() {
        if (this.isOpened) {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
            }
        } else {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
            }
        }
    }
    renderLoop() {
        this.render();
        if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
            requestAnimationFrame(() => {
                this.renderLoop();
            });
        } else {
            this.isAnimating = false;
        }
    }
}

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop(),
        block_pos = $(".block_pos").offset().top - 100,
        mnu_vis = $(".hamburger-block").hasClass("hide-hamb");
    if (block_pos < st && !mnu_vis) {
        $(".logo-white").addClass("logo-black");
        if (st > lastScrollTop){
            $('.main-head').addClass('head-scroll');
        } else {
            $('.main-head').removeClass('head-scroll');
        }
    } else {
        $(".logo-white").removeClass("logo-black");
    }
    lastScrollTop = st;
});

(function () {
    const elmHamburger = document.querySelector('.hamburger');
    const elmHambwrap = document.querySelector('.hamburger-block');
    const html_bl = document.querySelector('html');
    const gmenu = document.querySelector('.global-menu');
    const gNavItems = document.querySelectorAll('.global-menu__item');
    const elmOverlay = document.querySelector('.shape-overlays');
    const overlay = new ShapeOverlays(elmOverlay);

    elmHamburger.addEventListener('click', () => {

        if (overlay.isAnimating) {
            return false;
        }


        overlay.toggle();

        if (overlay.isOpened === true) {
            document.querySelector('.main-head').classList.add('head-top');
            elmHambwrap.classList.add('hide-hamb');
            html_bl.style.overflow = "hidden";
            elmHamburger.classList.add('is-opened-navi');
            document.querySelector('.body').classList.add('body-fix');
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.add('is-opened');
            }
            setTimeout(() => {
                gmenu.classList.add('global-menu-vis')
            }, 700);

        } else {

            gmenu.classList.remove('global-menu-vis');
            html_bl.style = " ";
            elmHamburger.classList.remove('is-opened-navi');
            elmHambwrap.classList.remove('hide-hamb');
            document.querySelector('.body').classList.remove('body-fix');
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.remove('is-opened');
            }
            setTimeout(() => {
                document.querySelector('.main-head').classList.remove('head-top')
            }, 500);

        }

    });
}());

if (window.innerWidth > 768) {
    $(".global-menu__item").on("mouseover", function () {
        if ($(this).hasClass("project-link")) {
            $(".details-mnu").removeClass("projects-submenu");
        } else {
            $(".details-mnu").addClass("projects-submenu");
        }
    });
}

if (window.innerWidth < 768) {
    $(".project-link").click(function () {
        $(".global-menu").addClass("global-menu-open-sub");
        $(".global-menu__wrap").addClass("projects-submenu");
        $(".details-mnu").removeClass("projects-submenu");
    });
    $("#back-g-menu").click(function () {
        $(".global-menu").removeClass("global-menu-open-sub");
        $(".details-mnu").addClass("projects-submenu");
        $(".global-menu__wrap").removeClass("projects-submenu");
    });

}
$(function () {
    $('.btn-hov')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });
});

// "use strict";
		
// 		!function() {
// 		  var t = window.driftt = window.drift = window.driftt || [];
// 		  if (!t.init) {
// 			if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
// 			t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
// 			t.factory = function(e) {
// 			  return function() {
// 				var n = Array.prototype.slice.call(arguments);
// 				return n.unshift(e), t.push(n), t;
// 			  };
// 			}, t.methods.forEach(function(e) {
// 			  t[e] = t.factory(e);
// 			}), t.load = function(t) {
// 			  var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
// 			  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
// 			  var i = document.getElementsByTagName("script")[0];
// 			  i.parentNode.insertBefore(o, i);
// 			};
// 		  }
// 		}();
// 		drift.SNIPPET_VERSION = '0.3.1';
// 		drift.load('8v5mkbnuhxui');