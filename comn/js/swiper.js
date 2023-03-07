var swiper = new Swiper(".search-popup .swiper-container", {
	slidesPerView: 3,
    spaceBetween: 25,
	loop: true,
	loopAdditionalSlides: 1,
	speed: 1000,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".search-popup .swiper-pagination",
	},
	breakpoints: {
		991: {
			centeredSlides: true,
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
	},
});

var mainSwiper01 = new Swiper(".main-report .swiper-container", {
	slidesPerView: 3.8,
    spaceBetween: 10,
	autoHeight: true,
	loop: true,
	loopAdditionalSlides: 1,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".main-report .swiper-button-next",
		prevEl: ".main-report .swiper-button-prev",
	},
	breakpoints: {
		1265: {
			slidesPerView: 3.5,
		},
		991: {
			slidesPerView: 2.5,
		},
		767: {
			slidesPerView: 1.3,
		},
	},
});

var mainSwiper03 = new Swiper(".main-right-slider .swiper-container", {
	slidesPerView: 3,
    spaceBetween: 45,
	loop: true,
	loopAdditionalSlides: 1,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".main-right-slider .swiper-button-next",
		prevEl: ".main-right-slider .swiper-button-prev",
	},
	breakpoints: {
		1265: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 1.5,
		},
		991: {
			slidesPerView: 3, 
			spaceBetween: 10,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 10, 
		},
	},
});

$(function(){
	var mainSwiper02 = new Swiper(".main-left-slider .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		loopAdditionalSlides: 1,
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".main-left-slider .swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".main-left-slider .swiper-button-next",
			prevEl: ".main-left-slider .swiper-button-prev",
		},
		breakpoints: {
			991: {
				centeredSlides: true,
				slidesPerView: 3,
				spaceBetween: 15,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
	});
	$(".swiper-button-pause").click(function(){
		$(this).toggleClass("active");
		if( $(this).hasClass("active") == true){
			mainSwiper02.autoplay.stop(); 		
		}else{
			mainSwiper02.autoplay.start(); 
		}
	});
});