import { productos } from "./productos.js";
import handleVerMasClick from "./handleVerMasClick.js";

function cargarTodosProductos(contenedor) {
    productos.forEach(producto => {
        contenedor.innerHTML +=
            `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card rounded-4">
                <img src="${producto.imagenes.img1}" class="card-img-top rounded-4 rounded-bottom-0 card_img_prod" alt="${producto.nombre}">
                    <div class="card-body d-flex justify-content-center align-items-center flex-column">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.precio}</p>
                        <a href="./producto.html" class="btn btn-primary ver-mas" id="${producto.id}">Ver más</a>
                    </div>
            </div>
        </div>
        `
    });
}

const contenedorProductos = document.getElementById('contenedorProductos')

cargarTodosProductos(contenedorProductos)

function addVerMasEventListeners() {
    const botonVerMas = document.getElementsByClassName('ver-mas');

    for (let boton of botonVerMas) {
        boton.addEventListener('click', handleVerMasClick);
    }
}

document.addEventListener('DOMContentLoaded', addVerMasEventListeners);