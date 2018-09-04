$(document).ready(function(){
    
    if (window.innerWidth > 991) {
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if ($(this).scrollTop() > $(".s-shipping").offset().top ) {
                $(".mnu-line-block").addClass("block-fix");
            } else {
                $(".mnu-line-block").removeClass("block-fix")
            }
        });
    }

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mnu-line-block").toggleClass("hidden-mnu");
        $(".mnu-line, .clipper").toggleClass("nav-show");
        $("body").toggleClass("body-hidden");
        return false;
    });

    $('.slide-contant').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    $("#review, #questions, #about, #privacy, #terms").click(function() {
        var id = $(this).attr("id");
        // console.log('#'+ id + '-popup');
        $('#'+ id + '_popup').addClass("view-popup");
        $("body").addClass("body-overflow");
    });

    $(".close-popup").click(function() {
        $("body").removeClass("body-overflow");
        $(".popup-block").removeClass("view-popup");
    });
    // var typed = new Typed('.ss-change-text', {
    //     stringsElement: '#left-item-1',
    //     typeSpeed: 60,
    //     loopCount: false
    // });
    $('#review-submit-btn').on("click", function(e) {
        $('.form-gen').validate({
            rules: {
                'review-name': {
                    required: true
                },
                'review-mail': {
                    required: true
                },
                'review-message': {
                    required: true
                }
            },
            errorClass: 'input-invalid',
            errorPlacement: function(error, element) {
                return false;
            },
            submitHandler: function(form) {

                $.ajax({
                    type: 'POST',
                    url: 'contact_us.php',
                    data: $(form).serialize(),
                    success: function() {
                        $(form)[0].reset();
                    },
                    error: function() {
                        $("#review-form").addClass("slide-hov");
                        $("#review_popup .title-review").html("Thank you!");
                    }
                });
                return false;
            }
        });
    });

    $('#contact-submit-btn').on("click", function(e) {
        $('.form-footer').validate({
            rules: {
                'foot-name': {
                    required: true
                },
                'foot-mail': {
                    required: true
                },
                'foot-message': {
                    required: true
                }
            },
            errorClass: 'input-invalid',
            errorPlacement: function(error, element) {
                return false;
            },
            submitHandler: function(form) {

                $.ajax({
                    type: 'POST',
                    url: 'contact_us.php',
                    data: $(form).serialize(),
                    success: function() {
                        $(form)[0].reset();                        
                    },
                    error: function() {
                        $(form)[0].reset();
                    }
                });
                return false;
            }
        });
    });

    $(".questions-item").click(function() {
        $(this).find(".q-item-descr").slideToggle("slow");
        $(this).toggleClass("item-rot");
    });
    


});
