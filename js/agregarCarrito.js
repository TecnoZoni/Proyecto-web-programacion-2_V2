import { productos } from "./productos.js";

export function agregarProducto(idProducto) {
    const user = JSON.parse(localStorage.getItem('login_succes'));
    if (user && user.cart) {
        const productoEnCarrito = user.cart.find(item => item.id === idProducto);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
        } else {
            const producto = productos.find(item => item.id === idProducto);
            if (producto) {
                user.cart.push({ ...producto, cantidad: 1 });
            }
        }
        localStorage.setItem('login_succes', JSON.stringify(user));
        alert(`El producto se agrego correctamente`)
    } else {
        alert("Usuario o carrito del usuario no funciona");
    }
}
