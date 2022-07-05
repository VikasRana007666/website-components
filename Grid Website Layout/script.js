// || -- HEADER SECTION

$(function () {
	$(".mob-nav-toggler").click(function(){
		$(this).toggleClass("nav-open");
		$(".mob-header-navigation").toggle("slow");
	});
});
