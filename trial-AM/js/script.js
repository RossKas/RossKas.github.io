/*jshint esversion: 6 */
$(document).ready(function () {

    // mobile-menu
    $(".navbar-toggler").click(() => {
        $("#navbarNavDropdown").slideToggle();
    });

    // slider-customers
    var owl_img_left = $('.slider-customers');
    owl_img_left.owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        mouseDrag: false,
        navText: ["<img src='./img/errow-slider.png' alt='errow-slider'>", "<img src='./img/errow-slider.png' alt='errow-slider'>"],
        nav: true,
        autoplay: true
    });

    // two menu
    if (window.innerWidth > 991) {
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop(),
                two_mnu = $(".s-offers-sol").offset().top - 44;
            if (scrollTop >= two_mnu) {
                $(".offer-top").addClass("mnu-fixed");
            } else {
                $(".offer-top").removeClass("mnu-fixed");
            }
        });
        // Parallax screen 1
        if ($('div').is('.scroll-block')) {
            var div_position_1 = $('.bl-1').offset(),
                div_position_2 = $('.bl-2').offset(),
                div_position_3 = $('.bl-3').offset();
            // console.log(div_position_2);
            if (window.innerWidth > 2000) {
                var salatHeight = 800,
                    stopScroll_1 = 1750,
                    salatHeight_2 = 820,
                    stopScroll_2 = 2950,
                    salatHeight_3 = 800,
                    stopScroll_3 = 4400;
            }
            if (window.innerWidth > 1600 && window.innerWidth < 2000) {
                var salatHeight = 647,
                    stopScroll_1 = 1600,
                    salatHeight_2 = 655,
                    stopScroll_2 = 2600,
                    salatHeight_3 = 650,
                    stopScroll_3 = 3700;
            }
            if (window.innerWidth <= 1600 && window.innerWidth > 1500) {
                var salatHeight = 600,
                    stopScroll_1 = 1600,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2450,
                    salatHeight_3 = 650,
                    stopScroll_3 = 3450;
            }
            if (window.innerWidth <= 1500 && window.innerWidth > 1400) {
                var salatHeight = 530,
                    stopScroll_1 = 1600,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2350,
                    salatHeight_3 = 650,
                    stopScroll_3 = 3300;
            }
            if (window.innerWidth <= 1400 && window.innerWidth > 1300) {
                var salatHeight = 480,
                    stopScroll_1 = 1600,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2300,
                    salatHeight_3 = 650,
                    stopScroll_3 = 3180;
            }
            if (window.innerWidth <= 1300 && window.innerWidth > 1200) {
                var salatHeight = 410,
                    stopScroll_1 = 1600,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2200,
                    salatHeight_3 = 650,
                    stopScroll_3 = 3030;
            }
            if (window.innerWidth <= 1200 && window.innerWidth > 1100) {
                var salatHeight = 330,
                    stopScroll_1 = 1650,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2090,
                    salatHeight_3 = 650,
                    stopScroll_3 = 2920;
            }
            if (window.innerWidth <= 1100 && window.innerWidth > 991) {
                var salatHeight = 300,
                    stopScroll_1 = 1650,
                    salatHeight_2 = 650,
                    stopScroll_2 = 2030,
                    salatHeight_3 = 650,
                    stopScroll_3 = 2820;
            }

            var startScroll_1 = div_position_1.top - salatHeight,
                startScroll_2 = div_position_2.top - salatHeight_2,
                startScroll_3 = div_position_3.top - salatHeight_3;
            //   console.log(startScroll_1);

            $('.bl-1 .scrin-item').each(function () {
                var $item = $(this);
                $(window).scroll(function () {
                    if ($(this).scrollTop() > startScroll_1 && $(this).scrollTop() < stopScroll_1 && $(this).scrollTop() < startScroll_2) {
                        var yPos = ($(window).scrollTop() - startScroll_1) / 100 * $item.data('speed');
                        var coords = 'center ' + yPos + '%';
                        $item.css({
                            backgroundPosition: coords
                        });
                    }
                });
            });
            $('.bl-2 .scrin-item').each(function () {
                var $item = $(this);
                $(window).scroll(function () {
                    // console.log($(this).scrollTop());
                    if ($(this).scrollTop() > startScroll_2 && $(this).scrollTop() < stopScroll_2) {
                        var yPos = ($(window).scrollTop() - startScroll_2) / 100 * $item.data('speed');
                        var coords = 'center ' + yPos + '%';
                        $item.css({
                            backgroundPosition: coords
                        });
                    }
                });
            });
            $('.bl-3 .scrin-item').each(function () {
                var $item = $(this);
                $(window).scroll(function () {
                    // console.log($(this).scrollTop());
                    if ($(this).scrollTop() > startScroll_3 && $(this).scrollTop() < stopScroll_3) {
                        var yPos = ($(window).scrollTop() - startScroll_3) / 100 * $item.data('speed');
                        var coords = 'center ' + yPos + '%';
                        $item.css({
                            backgroundPosition: coords
                        });
                    }
                });
            });
        }
    }

    // scroll id
    var $page = $('html, body');
    $('.get-full-btn[href*="#"]').click(function (e) {
        e.preventDefault();
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
    });

    // slider license
    $('.slider-license').owlCarousel({
        items: 1,
        margin: 30,
        touchDrag: false,
        mouseDrag: false,
        navText: ["<img src='./img/errow-slider.png' alt='errow-slider'>", "<img src='./img/errow-slider.png' alt='errow-slider'>"],
        nav: true
    });

    // (function() {
    //     var i = 0, k = 0, t = 0;
    //     $('.slider-license .owl-nav .owl-next').click(function () {
    //         var standard = $(this).parents('.standard'),
    //             family =  $(this).parents('.family'),
    //             ex_f = $(this).parents('.extended-family');
    //         if (i < 2 && standard) {
    //             i++;
    //             $(this).parents(".standard").find('.input_period').attr('value', i + 1);
    //         };
    //         if (k < 2 && family) {
    //             k++;
    //             $(this).parents(".family").find('.input_period').attr('value', k + 1);
    //         };
    //         if (t < 2 && ex_f) {
    //             t++;
    //             $(this).parents(".extended-family").find('.input_period').attr('value', t + 1);
    //         };
    //     });
    //     $('.slider-license .owl-nav .owl-prev').click(function () {
    //         var standard = $(this).parents('.standard'),
    //             family =  $(this).parents('.family'),
    //             ex_f = $(this).parents('.extended-family');
    //         if (i!=0 && standard) {
    //             i--;
    //             $(this).parents(".standard").find('.input_period').attr('value', i + 1);
    //         };
    //         if (k!=0 && family) {
    //             k--;
    //             $(this).parents(".family").find('.input_period').attr('value', k + 1);
    //         };
    //         if (t!=0 && ex_f) {
    //             t--;
    //             $(this).parents(".extended-family").find('.input_period').attr('value', t + 1);
    //         };
    //     });
    // }());
    (function () {
        var i = 0;
        $('.standard .owl-nav .owl-next').click(function () {
            if (i < 2) {
                i++;
                $(this).parents(".standard").find('.input_period').attr('value', i + 1);
            };
        });
        $('.standard .owl-nav .owl-prev').click(function () {
            if (i != 0) {
                i--;
                $(this).parents(".standard").find('.input_period').attr('value', i + 1);
            };
        });
    }());

    (function () {
        var i = 0;
        $('.family .owl-nav .owl-next').click(function () {
            if (i < 2) {
                i++;
                $(this).parents(".family").find('.input_period').attr('value', i + 1);
            };
        });
        $('.family .owl-nav .owl-prev').click(function () {
            if (i != 0) {
                i--;
                $(this).parents(".family").find('.input_period').attr('value', i + 1);
            };
        });
    }());

    (function () {
        var i = 0;
        $('.extended-family .owl-nav .owl-next').click(function () {
            if (i < 2) {
                i++;
                $(this).parents(".extended-family").find('.input_period').attr('value', i + 1);
            };
        });
        $('.extended-family .owl-nav .owl-prev').click(function () {
            if (i != 0) {
                i--;
                $(this).parents(".extended-family").find('.input_period').attr('value', i + 1);
            };
        });
    }());


    // get text license 
    if (window.innerWidth > 991) {
        setTimeout( function() {
            var text_license = document.querySelectorAll(".text-license");
            height_p = getComputedStyle(text_license[1]).height;
            for ( let i = 2; i < text_license.length; i++) {
                text_license[i].style.height = height_p;
            }

            var offers_items = document.querySelectorAll(".offers-items");
            offers_items_p = getComputedStyle(offers_items[1]).height;
            // console.log(offers_items);
            for ( let i = 0; i < offers_items.length; i++) {
                offers_items[i].style.height = offers_items_p;
            }

            //trial
            var license_items = document.querySelector(".standard"),
                license_trial = document.querySelector(".trial"),
                slider_license = document.querySelector(".slider-license"),
                block_trial = document.querySelector(".block-trial");
            license_standard_item = getComputedStyle(license_items).height;
            slider_license_item = getComputedStyle(slider_license).height;
            // console.log(license_standard_item);
            license_trial.style.height = license_standard_item;
            block_trial.style.height = slider_license_item;

            
            
        }, 500);
    }

    // form Our client

    var submitted = false;
    $.validator.addMethod('regkey', function (value) {
        return /^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$/.test(value);
    });
    $(document).on('click', '#renew-btn', function (event) {
        $('#renew-form').validate({
            onclick: false,
            onkeyup: false,
            onfocusout: false,
            errorLabelContainer: '#renew-errors',
            wrapper: 'li',
            errorClass: 'error',
            rules: {
                'regkey': {
                    'required': true,
                    'regkey': true
                },
            },
            messages: {
                'regkey': {
                    'required': 'Activation code field can\'t be empty',
                    'regkey': 'Activation code field must be of valid format'
                },
            },
            submitHandler: function (form) {
                if (submitted) {
                    return;
                }
                $.ajax({
                    url: '../regkey.php',
                    type: 'POST',
                    data: $(form).serialize(),
                    success: function (data, textStatus, jqXHR) {
                        $("#renew-form").data('validator').resetForm();
                        $(form)[0].reset();
                        var result_message_container = $('#renew-callback');
                        result_message_container.html('<label class="success">Thanks! Your personal link for renewal at discounted price will be sent to the email related to your order</label>');
                        result_message_container.show();
                        setTimeout(function () {
                            result_message_container.hide();
                            result_message_container.empty();
                        }, 5000);
                        submitted = false;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        var result_message_container = $('#renew-callback');
                        result_message_container.html('<label class="error">Undefined Error! Please try again or contact technical support!</label>');
                        result_message_container.show();
                        setTimeout(function () {
                            result_message_container.hide();  
                            result_message_container.empty();
                        }, 5000);
                        submitted = false;
                    }
                });
                submitted = true;
            }
        });
    });

});

// slider - how to start
! function (e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var c = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(c.exports, c, c.exports, t),
            c.l = !0,
            c.exports
    }
    var n = {};
    t.m = e,
        t.c = n,
        t.i = function (e) {
            return e
        },
        t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        t.n = function (e) {
            var n = e && e.__esModule ? function () {
                    return e.default
                } :
                function () {
                    return e
                };
            return t.d(n, "a", n),
                n
        },
        t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 608)
}({
    608: function (e, t) {
        var n = $("#carousel-start"),
            r = $("#extra-items"),
            c = $("#carousel-navigation").children(),
            a = "upload",
            o = function () {
                var e = n.children(),
                    t = $(e[e.length - 1]);
                t.css({
                        opacity: 0,
                        transform: "translateY(-60px) scale(.9)"
                    }),
                    t.insertBefore(e[0]),
                    setTimeout(function () {
                        t.removeAttr("style")
                    }, 1)
            },
            i = function () {
                n.children().each(function (e, t) {
                    var n = $(t).find("img");
                    n.attr("data-src") && (n.attr("src", n.attr("data-src")),
                        n.removeAttr("data-src"))
                })
            };
        i();
        var s = setInterval(function () {
                o()
            }, 3e3),
            l = function (e) {
                var t = n.children(),
                    c = r.find("." + e).clone().children();
                e !== a && (clearInterval(s),
                    r.find("." + a).length || r.append($('<div class="' + a + '"></div>').append(t.clone())),
                    n.css({
                        opacity: 0
                    }),
                    $("#" + a).removeClass("selected"),
                    $("#" + e).addClass("selected"),
                    a = e,
                    setTimeout(function () {
                        n.empty(),
                            n.append(c),
                            i(),
                            n.removeAttr("style"),
                            s = setInterval(function () {
                                o()
                            }, 3e3)
                    }, 400))
            };
        c.each(function (e, t) {
            t.addEventListener("click", function () {
                l(t.id)
            })
        })
    }
});