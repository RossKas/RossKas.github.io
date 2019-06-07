/*jshint esversion: 6 */ 
$(document).ready(function(){

    $("#FormConnect").submit( function(e) {
      e.preventDefault();
      let g_n = $("#greater_number").val(),
          hw = $(this).serialize();
      
      if (g_n == 8) {
        $.ajax({
          type: 'POST',
          url: '../../php/contact.php',
          data: hw + "&type=host_workshop",
          success: function(hw_result) {
              $("#FormConnect")[0].reset();
              $("#send-result").html(hw_result);                   
          },
          error: function() {
            $("#FormConnect")[0].reset();
            $("#send-result").html("Error sending data."); 
          }
        });
      } else if (g_n == 7) {
        $.ajax({
          type: 'POST',
          url: '../../php/contact.php',
          data: hw + "&type=one_on_one_coaching",
          success: function(hw_result) {
              $("#FormConnect")[0].reset();
              $("#send-result").html(hw_result);                   
          },
          error: function() {
            $("#FormConnect")[0].reset();
            $("#send-result").html("Error sending data."); 
          }
        });
      } else if (g_n == 6) {
        $.ajax({
          type: 'POST',
          url: '../../php/contact.php',
          data: hw + "&type=schedule_talk",
          success: function(hw_result) {
              $("#FormConnect")[0].reset();
              $("#send-result").html(hw_result);                   
          },
          error: function() {
            $("#FormConnect")[0].reset();
            $("#send-result").html("Error sending data."); 
          }
        });
      } else {
        $("#send-result").html("Number entered incorrectly."); 
        return;
      }
      
    });
    
});
