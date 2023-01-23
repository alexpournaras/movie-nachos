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

	// Subscribe form action
	const subscribeForm = document.getElementById('subscribe-form');
	const subscribeConfirmation = document.getElementById('successully-subscribed');

	subscribeForm.addEventListener('submit', function (e) {
		e.preventDefault()
		let email = e.target.elements.email.value;

		// Retrieve subscribed_emails from local storage
		let subscribed_emails = JSON.parse(localStorage.getItem('subscribed_emails')) || [];
		subscribed_emails.push(email);

		// Save email into local storage
		localStorage.setItem('subscribed_emails', JSON.stringify(subscribed_emails));
		subscribeConfirmation.style.display = "block";
		
		// Clear all form inputs
		subscribeForm.reset();
	});

	// Message send form action
	const contactUsForm = document.getElementById('contact-us-form');
	const messageSentConfirmation = document.getElementById('message-sent');

	contactUsForm.addEventListener('submit', function (e) {
		e.preventDefault()
		let email = e.target.elements.email.value;
		let message = e.target.elements.message.value;

		// Retrieve all messages from local storage
		let messages = JSON.parse(localStorage.getItem('messages')) || [];
		messages.push({ email: email, message: message});

		// Save email and message into local storage
		localStorage.setItem('messages', JSON.stringify(messages));
		messageSentConfirmation.style.display = "block";
		
		// Clear all form inputs
		contactUsForm.reset();
	});
});