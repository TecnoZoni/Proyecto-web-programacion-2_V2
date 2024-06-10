//Usuario Iniciado?
export function validarSesionUsuario() {
    const user = JSON.parse(localStorage.getItem('login_succes')) || false
    if (!user) {
        window.location.href = './login.html'
    }
    const botonLogin = document.getElementById('button-log')
    botonLogin.textContent = 'LogOut'

    botonLogin.addEventListener('click', () => {
        alert('Muchas gracias por visitar Nitsuga Tech!')
        localStorage.removeItem('login_succes')
        window.location.href = './login.html'
    })
}