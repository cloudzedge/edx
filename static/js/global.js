$('select').selectric({
	maxHeight: 200
});

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
	autoplay: {
		delay: 3000,
	}, 
	autoplayDisableOnInteraction: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
		type: 'bullets',
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '<i></i>' + '<b></b>'  + '</span>';
		  },
	
	},
});

var ClassSlider = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1.15,
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
			slidesPerView: 5,
			spaceBetween: 40,
		}
	},
	navigation: {
	  nextEl: '.product_search_slider .swiper-button-next',
	  prevEl: '.product_search_slider .swiper-button-prev',
	},
});

$('.js-toggle-upload').click(function(){
	$('.videoUpload').addClass('active');
	$('.mainOverlay').addClass('active');
	$('body').addClass('locked');
})

$('.js-toggle-reserve').click(function(){
	$('.reserveNow').addClass('active');
	$('.mainOverlay').addClass('active');
	$('body').addClass('locked');
})

$('.mainOverlay, .close-this').click(function(){
	$('.videoUpload').removeClass('active');
	$('.reserveNow').removeClass('active');
	$('.mainOverlay').removeClass('active');
	$('body').removeClass('locked');
})



