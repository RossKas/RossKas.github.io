/*jshint esversion: 6 */ 
$(document).ready(function(){
    
    $(".solutions-item").click(function() {
        $(".modal-table").removeClass("modal-table-hidden");
        $("body").addClass("body-hid");
        $(".solutions-item").removeClass("item-active");
        $(this).addClass("item-active");
    });

    $(".close-popup").click(function() {
        $(".modal-table").addClass("modal-table-hidden");
        $("body").removeClass("body-hid");
        $(".solutions-item").removeClass("item-active");
    });

    $(".view-toggle-row").click(function() {
      $(".view-toggle div").removeClass("view-active");
      $(this).addClass("view-active");
      $(".solutions-items").addClass("view-list");
    });
    
    $(".view-toggle-grid").click(function() {
      $(".view-toggle div").removeClass("view-active");
      $(this).addClass("view-active");
      $(".solutions-items").removeClass("view-list");
    });

    $("#customSwitchMnu").click(function() {
      if ($(".s-solutions").hasClass("show-descr")) {
        $(".s-solutions").removeClass("show-descr");
      } else {
        $(".s-solutions").addClass("show-descr");
      }
    });

    $(".show-cat-btn p").click(function() {
      if ($(".categories-block").hasClass("show-all-categories")) {
        $(".categories-block").removeClass("show-all-categories");
        $(this).html("Show all categories");
      } else {
        $(".categories-block").addClass("show-all-categories");
        $(this).html("Hide categories");
      }
    });

    $(".block-choose-classification p").click(function() {
      $(".block-choose-classification p").removeClass("classification-active");
      $(this).addClass("classification-active");
      let title = $(this).text();
      $(".title-solutions").html(title);
    });

});
