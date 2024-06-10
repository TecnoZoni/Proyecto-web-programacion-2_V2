import { productos } from "./productos.js";

export function agregarPeoducto(idProducto) {
    const user = JSON.parse(localStorage.getItem('login_succes'));

    if (user && user.cart) {
        productos.forEach(producto => {
            if (producto.id === idProducto) {
                user.cart.push(producto);
            }
        });

        localStorage.setItem('login_succes', JSON.stringify(user));
    } else {
        alert("Usuario o carrito del ususario no funciona");
    }
}