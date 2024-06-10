export function handleVerMasClick(event) {
    event.preventDefault();
    const productId = this.getAttribute('id');
    sessionStorage.setItem('productoId', productId);
    window.location.href = this.href;
}

