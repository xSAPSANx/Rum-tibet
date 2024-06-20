document.querySelector('.header_burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.header_menu').classList.toggle('open')
	document.querySelector('.header_menu-icon1').classList.toggle('open')
	document.querySelector('.header_menu-icon2').classList.toggle('open')
	document.querySelector('.header_menu-icon3').classList.toggle('open')
	document.querySelector('.header_menu-icon4').classList.toggle('open')
	document.querySelector('.header_menu-icon5').classList.toggle('open')
})
