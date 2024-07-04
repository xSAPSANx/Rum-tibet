document.querySelector('.header_burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.header_menu').classList.toggle('open')
	document.querySelector('.header_menu-icon1').classList.toggle('open')
	document.querySelector('.header_menu-icon2').classList.toggle('open')
	document.querySelector('.header_menu-icon3').classList.toggle('open')
	document.querySelector('.header_menu-icon4').classList.toggle('open')
	document.querySelector('.header_menu-icon5').classList.toggle('open')
})

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	resistanceRatioX: 0.8,
	direction: 'horizontal',
	freeMode: true,
	spaceBetween: 20,
	initialSlide: 0,
	keyboard: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
})
if (document.documentElement.clientWidth < 768) {
	var swiper = new Swiper('.mySwiperTravel', {
		slidesPerView: 3,
		resistanceRatioX: 0.8,
		direction: 'horizontal',
		freeMode: true,
		spaceBetween: 24,
		initialSlide: 0,
		keyboard: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 24,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			1000: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	})
}
