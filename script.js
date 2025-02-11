const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const toggleForm = document.getElementById('toggle-form');

let isLogin = true;

toggleForm.addEventListener('click', () => {
    isLogin = !isLogin;

    if (isLogin) {
        formTitle.textContent = 'Login';
        toggleForm.textContent = "Don't have an account? Sign up";
    } else {
        formTitle.textContent = 'Sign Up';
        toggleForm.textContent = 'Already have an account? Login';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isLogin) {
        alert('Logged in successfully!');
    } else {
        alert('Signed up successfully!');
    }
});
