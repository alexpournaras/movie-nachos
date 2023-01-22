document.addEventListener('DOMContentLoaded', function() {

	// Toggle filter dropdown
	const filterSortBtn = document.getElementById('filter-sort');
	const filterSortDropdown = document.getElementById('filter-sort-dropdown');

	filterSortBtn.addEventListener('click', function (e) {
		e.preventDefault()
		e.stopPropagation();
		filterSortDropdown.style.display = "block";
	});

	// Close dropdown when click elsewhere
	document.addEventListener('click', function (e) {
		if (!filterSortDropdown.contains(e.target)) filterSortDropdown.style.display = "none";
	});
});