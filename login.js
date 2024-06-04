const formTitle = document.getElementById('form-title');
const registerFields = document.getElementById('register-fields');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const authForm = document.getElementById('auth-form');

toggleLink.addEventListener('click', () => {
    if (registerFields.style.display === 'none') {
        formTitle.textContent = 'Registrate';
        registerFields.style.display = 'block';
        toggleText.textContent = 'Ya tienes una cuenta?';
        toggleLink.textContent = 'Iniciar';
    } else {
        formTitle.textContent = 'Login';
        registerFields.style.display = 'none';
        toggleText.textContent = "No tienes una cuenta?";
        toggleLink.textContent = 'Registrate';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formTitle.textContent === 'Registrate') {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden!');
            return;
        }
        alert('Registro exitoso!');
    } else {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        alert('Inicio exitoso!');
    }
});