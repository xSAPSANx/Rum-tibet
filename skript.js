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

window.addEventListener('DOMContentLoaded', () => {
	const resizableSwiper = (
		breakpoint,
		swiperClass,
		swiperSettings,
		callback
	) => {
		let swiper

		breakpoint = window.matchMedia(breakpoint)

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings)

			if (callback) {
				callback(swiper)
			}
		}

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings)
			} else {
				if (swiper !== undefined) swiper.destroy(true, true)
				return
			}
		}

		breakpoint.addEventListener('change', checker)
		checker()
	}

	const someFunc = instance => {
		if (instance) {
			instance.on('slideChange', function (e) {
				console.log('*** mySwiper.activeIndex', instance.activeIndex)
			})
		}
	}

	resizableSwiper('(max-width: 768px)', '.gallery__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		breakpoints: {
			390: {
				spaceBetween: 24,
			},
			350: {
				spaceBetween: 5,
			},
		},
		autoplay: {
			delay: 5e3,
			disableOnInteraction: !1,
		},
	})

	resizableSwiper('(max-width: 768px)', '.travel_swiper', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		breakpoints: {
			390: {
				spaceBetween: 24,
			},
			350: {
				spaceBetween: 5,
			},
		},
		autoplay: {
			delay: 5e3,
			disableOnInteraction: !1,
		},
	})
})
