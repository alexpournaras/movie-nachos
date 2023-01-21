document.addEventListener('DOMContentLoaded', function() {
	// Cookie functionality with localstorage
	const closeCookieBtn = document.getElementById('closeCookie');
	const acceptCookieBtn = document.getElementById('acceptCookie');
	const cookieNotification = document.getElementById('cookieNotification');

	if (localStorage.getItem('cookie_accepted') != 'true') {
		cookieNotification.style.display = "block";
	}

	closeCookieBtn.addEventListener('click', function () {
		cookieNotification.style.display = "none"
	});

	acceptCookieBtn.addEventListener('click', function () {
		localStorage.setItem('cookie_accepted', 'true');
		cookieNotification.style.display = "none"
	});

	// Menu responsive functionality
	const burgerMenu = document.getElementById('burger-menu');
	const menuLinks = document.getElementById('menu-links');
	const burgerIcon = burgerMenu.querySelector('i');

	burgerMenu.addEventListener('click', function () {
		menuLinks.classList.toggle("show-menu");
		burgerIcon.classList.toggle('fa-times');
		burgerIcon.classList.toggle('fa-bars');
	});

	// Subscribe action on click
	const subscribeBtn = document.getElementById('subscribe');
	const subscribeConfirmation = document.getElementById('successully-subscribed');

	subscribeBtn.addEventListener('click', function () {
		subscribeConfirmation.style.display = "block";
	});

	// Message sent action on click
	const messageSendBtn = document.getElementById('message-send');
	const messageSentConfirmation = document.getElementById('message-sent');

	messageSendBtn.addEventListener('click', function () {
		messageSentConfirmation.style.display = "block";
	});
});