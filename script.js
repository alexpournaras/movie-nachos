window.onload = function () {

	const burger_menu = document.getElementById('burger-menu');
	const menu_links = document.getElementById('menu-links');
	const icon = burger_menu.querySelector('i');

	burger_menu.addEventListener('click', function () {
		menu_links.classList.toggle("show-menu");
		icon.classList.toggle('fa-times');
		icon.classList.toggle('fa-bars');


	});

	
	
	setSlide(1);
};

function setRightColumnHeight() {
	// Get the left and right columns
	var leftColumn = document.querySelector('.popular-movies');

	var rightColumn = document.querySelector('.actors');
	// Set the max-height of the right column to the height of the left column
	rightColumn.style.maxHeight = (leftColumn.offsetHeight - 10) + "px";
  }
	// Call the function when the page loads
	window.addEventListener("load", setRightColumnHeight);
	
	// Call the function again when the window is resized
	window.addEventListener("resize", setRightColumnHeight);
var active_slide = null;
var auto_scroll = true;

var intervalId = setInterval(() => {
	if (auto_scroll) nextSlide();
}, 5000);

function nextSlide() {
	active_slide += 1;
	if (active_slide > 3) active_slide = 1;
	setSlide(active_slide);
}

function previousSlide() {
	active_slide -= 1;
	if (active_slide < 1) active_slide = 3;
	setSlide(active_slide);
}

function changeSlide(slide) {
	active_slide = slide;
	setSlide(slide);
}

function setSlide(slide) {
	if (!active_slide) active_slide = slide;

	clearInterval(intervalId);

	intervalId = setInterval(() => {
		if (auto_scroll) nextSlide();
	}, 5000);

	var i;
	var slides = document.getElementsByClassName("Containers");
	var circles = document.getElementsByClassName("dots");
	if (slide > slides.length) { slide = 1 }
	if (slide < 1) { slide = slides.length }

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < circles.length; i++) {
		circles[i].className = circles[i].className.replace(" enable", "");
	}

	slides[slide - 1].style.display = "block";
	circles[slide - 1].className += " enable";
}

let xDown = null;
let yDown = null;

document.addEventListener('touchstart', (event) => {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
});

document.addEventListener('touchmove', (event) => {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      // Swipe left
      nextSlide();
    } else {
      // Swipe right
      previousSlide();
    }
  }

  xDown = null;
  yDown = null;
});

