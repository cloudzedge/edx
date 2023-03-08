$(window).on("load resize scroll",function(e){
    var containerHeight = $('.hero').height() - 100;
    var windowHeight = ($(window).scrollTop());   
    
    if( windowHeight > containerHeight ){
        $("header").removeClass('transparent');
    } else {
        $('header').addClass('transparent');
    }
});


var HeroSlider = new Swiper('.hero .swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
	  nextEl: '.product_search_slider .swiper-button-next',
	  prevEl: '.product_search_slider .swiper-button-prev',
	},
});

var ClassSlider = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1.5,
	spaceBetween: 20,
	centeredSlides: false,
	breakpoints: {
		700: {
			slidesPerView: 2.5,
			spaceBetween: 25,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		2000: {
			slidesPerView: 4,
			spaceBetween: 40,
		}
	},
	navigation: {
	  nextEl: '.product_search_slider .swiper-button-next',
	  prevEl: '.product_search_slider .swiper-button-prev',
	},
});

