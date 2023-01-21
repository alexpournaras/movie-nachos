document.addEventListener('DOMContentLoaded', function() {

	// Toggle filters dropdown
	const filterSortBtn = document.getElementById('filter-sort');
	const filterGenreBtn = document.getElementById('filter-genre');
	const filterYearBtn = document.getElementById('filter-year');
	const filterSortDropdown = document.getElementById('filter-sort-dropdown');
	const filterGenreDropdown = document.getElementById('filter-genre-dropdown');
	const filterYearDropdown = document.getElementById('filter-year-dropdown');

	filterSortBtn.addEventListener('click', function (e) {
		e.preventDefault()
		e.stopPropagation();
		filterSortDropdown.style.display = "block";
		filterGenreDropdown.style.display = "none";
		filterYearDropdown.style.display = "none";
	});

	filterGenreBtn.addEventListener('click', function (e) {
		e.preventDefault()
		e.stopPropagation();
		filterGenreDropdown.style.display = "block";
		filterSortDropdown.style.display = "none";
		filterYearDropdown.style.display = "none";
	});

	filterYearBtn.addEventListener('click', function (e) {
		e.preventDefault()
		e.stopPropagation();
		filterYearDropdown.style.display = "block";
		filterSortDropdown.style.display = "none";
		filterGenreDropdown.style.display = "none";
	});

	// Close dropdowns when click elsewhere
	document.addEventListener('click', function (e) {
		if (!filterSortDropdown.contains(e.target)) filterSortDropdown.style.display = "none";
		if (!filterGenreDropdown.contains(e.target)) filterGenreDropdown.style.display = "none";
		if (!filterYearDropdown.contains(e.target)) filterYearDropdown.style.display = "none";
	});
});