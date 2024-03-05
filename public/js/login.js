// Attach event listener to login form
document.querySelector('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the username and password from the form
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        // Send a POST request to the login route
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in.');
        }
    }
});
