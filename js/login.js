const formTitle = document.getElementById('form-title');
const registerFields = document.querySelectorAll('#register-fields');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const authForm = document.getElementById('auth-form');
const buttonForm = document.getElementById('button-form');

//Inputs de validaciones
const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;

//Registro del ususario
let usuarios = []

function registrarUsuario(nombre, apellido, email, contraseña) {
    usuarios.push({
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña,
        iniciado: false,
        carrito: []
    })
}

//Vista de registro o inicio
toggleLink.addEventListener('click', () => {
    registerFields.forEach(field => {
        if (field.style.display === 'none') {
            formTitle.textContent = 'Regístrate';
            field.style.display = 'block';
            toggleText.textContent = '¿Ya tienes una cuenta?';
            toggleLink.textContent = 'Iniciar sesión';
            buttonForm.textContent = 'Regístrarse';
        } else {
            formTitle.textContent = 'Iniciar Sesión';
            field.style.display = 'none';
            toggleText.textContent = "¿No tienes una cuenta?";
            toggleLink.textContent = 'Regístrate';
            buttonForm.textContent = 'Iniciar';
        }
    });
});

//autenticación
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formTitle.textContent === 'Regístrate') {
        if (password !== confirmPassword) {
            alert('¡Las contraseñas no coinciden!');
            return;
        }
        alert('¡Registro exitoso!');
    } else {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        alert('¡Inicio exitoso!');
    }
});
