const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = Users.find(user => user.email === email && user.password === password)

    if(validUser){
        return ('Usuario y/o contraseñas incorrectos')
    }

    alert(`Bienvenido ${validUser.name}`)
    window.location.href = './index.html'

});
