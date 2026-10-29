$(function () {
	$(".top>a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
});


var swiper = new Swiper('.mySwiper', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
