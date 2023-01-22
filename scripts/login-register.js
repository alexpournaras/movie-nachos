document.addEventListener('DOMContentLoaded', function() {
    // Initialize signup and login variables
    const signUpButton = document.getElementById('signup-button');
	const loginButton = document.getElementById('login-button');
	const signUpForm = document.getElementById('signup-form');
	const loginForm = document.getElementById('login-form');

    // Show Registration form
	signUpButton.addEventListener('click', function (e) {
		loginForm.style.display = "none";
        signUpForm.style.display = "block";
	});

    // Show Login form
    loginButton.addEventListener('click', function (e) {
		signUpForm.style.display = "none";
        loginForm.style.display = "block";
	});
});