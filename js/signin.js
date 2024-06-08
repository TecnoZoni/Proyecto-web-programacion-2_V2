const authForm = document.getElementById('auth-form');
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const userRegistrated = Users.find(user => user.email === email)

    if (userRegistrated) {
        return alert('El usuario ya esta registrado')
    }

    if (password !== confirmPassword) {
        return alert('Las constraseñas no coinciden')
    }

    Users.push({ name: name, lastName: lastName, email: email, password: password, cart: [] })
    localStorage.setItem('users',JSON.stringify(Users))
    alert('Registro Exitoso')

    window.location.href = './login.html'

})