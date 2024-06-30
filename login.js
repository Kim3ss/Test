document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('loginFeedback');

    // For simplicity, assume these are the correct credentials
    const correctUsername = 'admin';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
        feedback.textContent = 'Login successful!';
        feedback.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 500);
    } else {
        feedback.textContent = 'Incorrect username or password.';
        feedback.style.color = 'red';
    }
});
