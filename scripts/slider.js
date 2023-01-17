document.addEventListener('DOMContentLoaded', function() {
	// Set initial slider when page loads
	setSlide(1);
});

const automaticScroll = true;
const scrollInterval = 5000;
let activeSlide = null;

var intervalId = setInterval(() => {
	if (automaticScroll) nextSlide();
}, scrollInterval);

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