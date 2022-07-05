// || -- HEADER SECTION

$(function () {
	$(".mob-nav-toggler").click(function(){
		$(this).stop().toggleClass("nav-open");
		$(".mob-header-navigation").stop().toggle("slow");
	});
});
