document.addEventListener('DOMContentLoaded', function() {
	// Register form action
	const registerForm = document.getElementById('register-form');
	const successullyRegistered = document.getElementById('successully-registered');

	registerForm.addEventListener('submit', function (e) {
		e.preventDefault()
		let username = e.target.elements.username.value;
		let email = e.target.elements.email.value;
		let password = e.target.elements.password.value;

		// Retrieve all users from local storage
		let users = JSON.parse(localStorage.getItem('users')) || [];
		users.push({ username: username, email: email, password: password });

		// Save user data into local storage
		localStorage.setItem('users', JSON.stringify(users));
		successullyRegistered.style.display = "block";
		
		// Clear all form inputs
		registerForm.reset();
	});
});