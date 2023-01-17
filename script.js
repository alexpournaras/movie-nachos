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

	// Set initial slider when page loads
	setSlide(1);
});

// Call the function when the page loads
window.addEventListener("load", setRightColumnHeight);

// Call the function when the window is resized
window.addEventListener("resize", setRightColumnHeight);

const automaticScroll = true;
const scrollInterval = 5000;
let activeSlide = null;

var intervalId = setInterval(() => {
	if (automaticScroll) nextSlide();
}, scrollInterval);

function setRightColumnHeight() {
	const leftColumn = document.querySelector('.popular-movies');
	const rightColumn = document.querySelector('.actors');

	rightColumn.style.maxHeight = (leftColumn.offsetHeight - 10) + "px";
}

function nextSlide() {
	activeSlide += 1;
	if (activeSlide > 3) activeSlide = 1;
	setSlide(activeSlide);
}

function previousSlide() {
	activeSlide -= 1;
	if (activeSlide < 1) activeSlide = 3;
	setSlide(activeSlide);
}

function changeSlide(slide) {
	activeSlide = slide;
	setSlide(slide);
}

function setSlide(slide) {
	if (!activeSlide) activeSlide = slide;

	// Reset the interval after manual change of slide
	clearInterval(intervalId);
	intervalId = setInterval(() => {
		if (automaticScroll) nextSlide();
	}, scrollInterval);

	// Set the correct slide
	var slides = document.getElementsByClassName('slideshow-item');
	var dots = document.getElementsByClassName('slideshow-dot');
	if (slide > slides.length) { slide = 1 }
	if (slide < 1) { slide = slides.length }

	// Hide and show the correct slide and dot
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' slideshow-enabled', '');
	}

	slides[slide - 1].style.display = 'block';
	dots[slide - 1].className += ' slideshow-enabled';
}

// Initialize touch-points
let initialTouchX = null;
let initialTouchY = null;

document.addEventListener('touchstart', (event) => {
	initialTouchX = event.touches[0].clientX;
	initialTouchY = event.touches[0].clientY;
});

// Handle touch-swipe actions to move to the next or previous slide
document.addEventListener('touchmove', (event) => {
	if (!initialTouchX || !initialTouchY) return;

	const xUp = event.touches[0].clientX;
	const yUp = event.touches[0].clientY;
	const xDiff = initialTouchX - xUp;
	const yDiff = initialTouchY - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			// Swipe left
			nextSlide();
		} else {
			// Swipe right
			previousSlide();
		}
	}

	initialTouchX = null;
	initialTouchY = null;
});