import { productos } from "./productos.js";
import { agregarPeoducto } from "./agregarCarrito.js";
import { validarSesionUsuario } from "./validarSesion.js";

const idPorducto = sessionStorage.getItem('productoId')
const contenedorDatosProdcutos = document.getElementById('contenedorDatosProducto')
const carcterisitcasComentarios = document.getElementById('carcterisitcasComentarios')

productos.forEach(producto => {
    if (producto.id == idPorducto) {
        contenedorDatosProdcutos.innerHTML = "";
        carcterisitcasComentarios.innerHTML = "";
        contenedorDatosProdcutos.innerHTML +=
            `
        
                <div class="col-12 col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${producto.imagenes.img1}" class="d-block w-100 img_carrusel" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${producto.imagenes.img2}" class="d-block w-100 img_carrusel" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${producto.imagenes.img3}" class="d-block w-100 img_carrusel" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
                <div class="col-12 col-md-6 rounded-2 d-flex flex-column align-items-center justify-content-evenly">
                    <h3>${producto.nombre}</h3>
                    <p class="display-6">$${producto.precio}</p>
                    <div>
                        <a class="btn btn-primary">Comprar ahora</a>
                        <a class="btn btn-primary" id="boton_guardar">Guardar en el carrito</a>
                    </div>
                </div>
            
        `
        let caracteristicasHTML = `
    <div class="col-12 col-md-6">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Características principales</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>`;

        producto.caracteristicas.forEach(carac => {
            caracteristicasHTML += `
        <tr>
            <th scope="row">${carac.nombre}</th>
            <td>${carac.tipo}</td>
        </tr>`;
        });

        caracteristicasHTML += `
            </tbody>
        </table>
    </div>
    <div class="col-12 col-md-6 mt-4">
        <h3>Comentarios</h3>
        <div class="input-group">
            <textarea class="form-control" placeholder="Dejanos tu comentario"
                id="commentTextarea"></textarea>
            <button class="btn btn-primary" type="button">Comentar</button>
        </div>
    </div>`;

        carcterisitcasComentarios.innerHTML += caracteristicasHTML;
    }
});

const botonGuardar = document.getElementById('boton_guardar')

botonGuardar.addEventListener('click',agregarPeoducto(idPorducto))

validarSesionUsuario()