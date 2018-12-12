$(".navbar-toggle").click(function() {
	$("#navbar2").addClass("nmu-show");
	$("body").addClass("body-overflow");
});
$(".btn-close").click(function() {
	$("#navbar2").removeClass("nmu-show");
	$("body").removeClass("body-overflow");
});
$(".errow-block").click(function() {
	$(".mobile-mnu").slideToggle(300);
	$(this).toggleClass("errow-d");
});
