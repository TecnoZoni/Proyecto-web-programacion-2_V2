import { validarSesionUsuario } from './validarSesion.js';


const containerCarrito = document.getElementById('container_carrito');
const user = JSON.parse(localStorage.getItem('login_succes'));


if (user && user.cart && Array.isArray(user.cart) && user.cart.length > 0) {
    user.cart.forEach((producto, index) => {
        containerCarrito.innerHTML += `
            <div class="card mb-3" data-index="${index}">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${producto.imagenes.img1}" class="card-img card_img_prod" alt="${producto.nombre}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${producto.precio * producto.cantidad}</p>
                            <p class="card-text"><small class="text-muted">Cantidad: ${producto.cantidad}</small></p>
                            <button class="btn btn-danger btn-sm btn_eliminar" data-index="${index}">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
} else {
    containerCarrito.innerHTML = `
        <div class="text-center">
            <h2>Carrito de Compras</h2>
            <p class="mt-4">Carrito vacío</p>
            <a href="./productos.html" class="btn btn-primary mt-3">Por favor, agregue uno o más productos</a>
        </div>
    `;
}

// Función para eliminar productos del carrito
const eliminarProducto = (index) => {
    user.cart.splice(index, 1);
    localStorage.setItem('login_succes', JSON.stringify(user));
    location.reload(); // Recargar la página para actualizar el contenido del carrito
};

// Asignar eventos a los botones de eliminar
document.querySelectorAll('.btn_eliminar').forEach(button => {
    button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        eliminarProducto(index);
    });
});


// Debugging: Verify what is being retrieved
console.log('User:', user);
console.log('Cart:', user ? user.cart : 'No user or cart found');

validarSesionUsuario()