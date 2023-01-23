document.addEventListener('DOMContentLoaded', function() {
	// Login form action
	const loginForm = document.getElementById('login-form');
	const userNotFound = document.getElementById('user-not-found');
	const successfullyLoggedIn = document.getElementById('successfully-logged-in');

	loginForm.addEventListener('submit', function (e) {
		e.preventDefault()
		let username = e.target.elements.username.value;
		let password = e.target.elements.password.value;

		// Retrieve all users from local storage
		let users = JSON.parse(localStorage.getItem('users')) || [];

		users.forEach(user => {
			// Check if user exists with correct password
			if (user.username == username && user.password == password) {
				successfullyLoggedIn.style.display = "block";
				return;
			}
		});

		// If user not found in local storage
		userNotFound.style.display = "block";
		return;
	});
});