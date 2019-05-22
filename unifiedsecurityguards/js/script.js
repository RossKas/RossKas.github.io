/*jshint esversion: 6 */
$(document).ready(function () {
    if (window.innerWidth > 991) {
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            if ($(this).scrollTop() > $("#ABOUT, #top-mnu-fixed").offset().top) {
                $(".mnu-line").addClass("block-fix");
            } else {
                $(".mnu-line").removeClass("block-fix")
            }
        });
    }

    if (!$("body").hasClass("join-our-team")) {
        $('.mnu-line a[href*="#"], .block-btn a[href*="#"]').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
        });
    }


    if ($("body").hasClass("join-our-team")) {
        $(function () {
            $('#birthday').daterangepicker({
                "singleDatePicker": true,
                "minYear": 1900,
                "maxYear": 2019,
                "locale": {
                    "format": "MM-DD-YYYY"
                },
                "showDropdowns": true,
                "startDate": "01/01/1960",
                "endDate": "05/13/2019",
                "opens": "center",
                "drops": "down"
            }, function (start, end, label) {
                $('#birthday').attr("value", start.format('MM-DD-YYYY'));
                // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            });

        });

        $(function () {
            $('input[name="date-service"]').daterangepicker({
                autoUpdateInput: false,
                autoApply: true,
                locale: {
                    cancelLabel: 'Clear'
                },
                "showDropdowns": true,
            });
            $('input[name="date-service"]').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY') + ' — ' + picker.endDate.format('MM-DD-YYYY'));
            });
            $('input[name="date-service"]').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });
        });
        $(function () {
            $('.address').daterangepicker({
                autoUpdateInput: false,
                autoApply: true,
                locale: {
                    cancelLabel: 'Clear'
                },
                "showDropdowns": true,
            });
            $('.address').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY') + ' — ' + picker.endDate.format('MM-DD-YYYY'));
            });
            $('.address').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });
        });

        $(function () {
            $('input[name="PresentEmployerDateStarted"]').daterangepicker({
                "singleDatePicker": true,
                "minYear": 1900,
                "maxYear": 2019,
                "locale": {
                    "format": "MM-DD-YYYY"
                },
                "showDropdowns": true,
                "startDate": "01/01/1960",
                "endDate": "05/13/2019",
                "opens": "center",
                "drops": "down"
            }, function (start, end, label) {
                $('input[name="PresentEmployerDateStarted"]').attr("value", start.format('MM-DD-YYYY'));
            });

        });

        $(function () {
            $('input[name="PreviousEmployerDateStarted"]').daterangepicker({
                "singleDatePicker": true,
                "minYear": 1900,
                "maxYear": 2019,
                "locale": {
                    "format": "MM-DD-YYYY"
                },
                "showDropdowns": true,
                "startDate": "01/01/1960",
                "endDate": "05/13/2019",
                "opens": "center",
                "drops": "down"
            }, function (start, end, label) {
                $('input[name="PreviousEmployerDateStarted"]').attr("value", start.format('MM-DD-YYYY'));
            });

        });

    }
});