document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    
    usernameError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

  
    if (!username) {
        usernameError.textContent = 'Please enter your username.';
        isValid = false;
    }

   
    if (!password) {
        passwordError.textContent = 'Please enter your password.';
        isValid = false;
    }

   
    if (isValid) {
        alert('Form submitted')
    }
});