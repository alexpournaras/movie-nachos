// Call the function when the page loads
window.addEventListener("load", setRightColumnHeight);

// Call the function when the window is resized
window.addEventListener("resize", setRightColumnHeight);

function setRightColumnHeight() {
	const leftColumn = document.querySelector('.popular-movies');
	const rightColumn = document.querySelector('.actors');

	rightColumn.style.maxHeight = (leftColumn.offsetHeight - 10) + "px";
}