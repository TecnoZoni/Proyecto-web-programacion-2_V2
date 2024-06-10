import { productos } from './productos.js';
import { handleVerMasClick } from './handleVerMasClick.js';
import { validarSesionUsuario } from './validarSesion.js';

//Funcion necesaria para las validaciones del formulario en el index.html
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

//Funcion para cargar las cards de los primeros 4 productos
function cargarMejoresProductos(contenedor) {
    for (let i = 0; i < 4; i++) {
        contenedor.innerHTML +=
            `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card rounded-4">
                    <img src="${productos[i].imagenes.img1}" class="card-img-top rounded-4 rounded-bottom-0 img_card" alt="${productos[i].nombre}" >
                    <div class="card-body d-flex justify-content-center align-items-center flex-column">
                        <h5 class="card-title">${productos[i].nombre}</h5>
                        <p class="card-text">$${productos[i].precio}</p>
                        <a href="./producto.html" class="btn btn-primary ver-mas" id="${productos[i].id}">Ver más</a>
                    </div>
                </div>
            </div>
            `
    }
}
const mejoresProd = document.getElementById('mejoresProductos')
cargarMejoresProductos(mejoresProd)

//Funcion para agregar los eventos ver mas datos en las cards de los productos
function addVerMasEventListeners() {
    const botonVerMas = document.getElementsByClassName('ver-mas');

    for (let boton of botonVerMas) {
        boton.addEventListener('click', handleVerMasClick);
    }
}
document.addEventListener('DOMContentLoaded', addVerMasEventListeners);

validarSesionUsuario()