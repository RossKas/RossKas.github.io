/*jshint esversion: 6 */
$(document).ready(function () {
    AOS.init({
        easing: 'ease-in-sine',
        duration: 600
    });
    // menu
    $(".btn-mnu").click( function() {
        $(".mnu-wrap").removeClass("mnu-hidden");
    });
    
    $(".mnu-closed").click( function() {
        $(".mnu-wrap").addClass("mnu-hidden");
    });

    $(".menu a").click( function() {
        $(".mnu-wrap").addClass("mnu-hidden");
    });

    if (window.innerWidth > 991) {
        
        var controllerg = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
                triggerElement: ".marketplace-info",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-left', 'item-anim-1')
            // .addIndicators()
            .addTo(controllerg);
        new ScrollMagic.Scene({
                triggerElement: ".marketplace-info",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-middle', 'item-anim-2')
            // .addIndicators()
            .addTo(controllerg);
        new ScrollMagic.Scene({
                triggerElement: ".marketplace-info",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-right', 'item-anim-3')
            // .addIndicators()
            .addTo(controllerg);
    } else {
        var controllerg = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
                triggerElement: ".item-left",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-left', 'item-anim-1')
            // .addIndicators()
            .addTo(controllerg);
        new ScrollMagic.Scene({
                triggerElement: ".item-middle",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-middle', 'item-anim-2')
            // .addIndicators()
            .addTo(controllerg);
        new ScrollMagic.Scene({
                triggerElement: ".item-right",
                triggerHook: 0.8,
                duration: "200%"
            })
            .setClassToggle('.item-right', 'item-anim-3')
            // .addIndicators()
            .addTo(controllerg);
    }
    // expanding
    var controller4 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: ".s-expanding",
            triggerHook: 0.5,
            duration: "300%"
        })
        .setClassToggle('.s-expanding', 'anim-expanding')
        // .addIndicators()
        .addTo(controller4);

    // grow
    var controller5 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: ".s-grow",
            triggerHook: 0.3,
            duration: "300%"
        })
        .setClassToggle('.s-grow', 'anim-grow')
        // .addIndicators()
        .addTo(controller5);

    // interested
    var controller6 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: ".s-interested",
            triggerHook: 0.3,
            duration: "300%"
        })
        .setClassToggle('.s-interested', 'anim-interested')
        // .addIndicators()
        .addTo(controller6);
    
    // new-game
    var controller7 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: ".s-new-game",
            triggerHook: 0.4,
            duration: "200%"
        })
        .setClassToggle('.s-new-game', 'anim-new-game')
        // .addIndicators()
        .addTo(controller7);



    if (window.innerWidth < 1100) {
        // new-subscribe
        var controller8 = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
                triggerElement: ".s-subscribe",
                triggerHook: 0.9,
                duration: "150%"
            })
            .setClassToggle('.s-subscribe', 'anim-subscribe')
            // .addIndicators()
            .addTo(controller8);
    } else {
        // new-subscribe 
        var controller8 = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
                triggerElement: ".s-subscribe",
                triggerHook: 0.9,
                duration: "165%"
            })
            .setClassToggle('.s-subscribe', 'anim-subscribe')
            // .addIndicators()
            .addTo(controller8);
    }

    // scroll mnu 
    var $page = $('html, body');
    $('.nav-link[href*="#"], .over-info a[href*="#"]').click(function (e) {
        e.preventDefault();
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
    });

    $(".describe").on('input', function () {
        let text = $(this).val();
        if (text !== '') {
            $(this).parent(".leb").addClass("write-value");
            if (document.querySelectorAll(".write-value").length < 4) {
                $("#btn-next").removeClass("btn-vis");
            } else {
                $(".submit-block").removeClass("submit-hidden");
            }
        } else {
            $("#btn-next").addClass("btn-vis");
        }
    });

    $(".next").click(function () {
        let in_hid = document.querySelectorAll(".input-hidden");
        if (in_hid.length >= '1') {
            $("#btn-next").addClass("btn-vis");
            $(".write-value").addClass("text-form-opas").children(".describe").addClass("input-blk");
            in_hid[0].classList.remove('input-hidden');
        }
    });

    // hover input
    $('.wait-list-form input').mouseover(function () {
        $('.wait-list-form input').removeClass('active active-one');
        $(this).addClass('active');
    });


    $(".form-foot").submit(function (event) {
        event.preventDefault();
        $(".form-foot").addClass("form-hide");
        $(".block-thank-you").addClass("thank-you-vis");
        // var formData = new FormData(this);
        // formData.append('service_id', 'hello_binary_vision');
        // formData.append('template_id', 'template_HsKrfsH2');
        // formData.append('user_id', 'user_zkugnNx2fhfZS4gHt7A02');

        // $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        //     type: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).done(function() {
        //     $(".form-foot").addClass("form-hide");
        //     $(".block-thank-you").addClass("thank-you-vis");
        // }).fail(function(error) {
        //     alert('Oops... ' + JSON.stringify(error));
        // });
    });

});