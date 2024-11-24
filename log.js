const container = document.querySelector('.container');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');

// Show Sign-Up
function showSignUp() {
    container.classList.add('active');
    loginContainer.classList.add('active');
    signupContainer.classList.add('active');
}

// Show Login
function showLogin() {
    container.classList.remove('active');
    loginContainer.classList.remove('active');
    signupContainer.classList.remove('active');
}

// Handle Login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === 'VIT' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    } 

    if (username === 'vit' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    } 
    if (username === 'ViT' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    } 
    if (username === 'vit ' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    } 
    if (username === 'VIT ' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    }
    if (username === 'Vit' && password === '1234') {
        window.location.href = 'https://projectaladdin.neocities.org/'; 
    }
    else {
        alert('Invalid credentials. Please try again. For Beta Testing username :VIT & Password : 1234');
    }
}

// Handle Sign-Up
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission

    // Show message that sign-up is not supported
    alert('This project does not include the sign-up option for now! <b> Use Username : ARNAV & Password : 1234');
}