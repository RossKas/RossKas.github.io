jQuery(document).ready(function($) {
    $("#form_1").submit(function() {
        $(".form_block_wrap").show();

        var str = $(this).serialize();
        $(".div1").html("Wait please...");
        $.ajax({
            type: "POST",
            url: "esputnik-email-api.php",
            data: str,
            success: function(msg) {
                if (msg == 'OK') {
                    $("#form_1")[0].reset();
                } else {
                    $('.inp_2').css('border', '1px solid red')

                }
                $(".form_block_wrap").hide();
                $(".div1").html("Thank you!");
            }

        });

        return false;
    });


    $("#form").submit(function() {
        $(".block_wrap").show();
        var str = $(this).serialize();
        $(".div").html("Wait please...");
        $.ajax({
            type: "GET",
            url: "https://bind.gridinsoft.com/am-api/get-pre-key.php",
            data: str,
            success: function(msg) {
                $.ajax({
                    type: "POST",
                    url: "send_mail.php",
                    data: str + '&key=' + msg,
                    success: function(resp) {
                        $(".div").html("Thank you!");
                        $("#form")[0].reset();
                        $(".block_wrap").hide();
                        console.log(resp);
                    }
                });

            }

        });

        return false;
    });

});