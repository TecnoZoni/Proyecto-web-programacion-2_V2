const formTitle = document.getElementById('form-title');
const registerFields = document.querySelectorAll('#register-fields');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const authForm = document.getElementById('auth-form');
const buttonForm = document.getElementById('button-form');

//autenticación
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    /* if (formTitle.textContent === 'Regístrate') {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('¡Las contraseñas no coinciden!');
            return;
        }
        alert('¡Registro exitoso!'); */
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert('¡Inicio exitoso!');
});
