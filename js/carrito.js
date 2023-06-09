const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio =document.querySelector("#carrito-vacio");
const contenedorCarritoProductos =document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado =document.querySelector("#carrito-comprado");


if (productosEnCarrito){

contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.remove("disabled");
contenedorCarritoAcciones.classList.remove("disabled");
contenedorCarritoComprado.classList.add("disabled");


productosEnCarrito.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `  <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="carrito-producto-titulo">
        <small>tiulo</small>
        <h3${producto.titulo}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>cantidad</small>
        <p>${producto.cantidad}</p>
    </div>

    <div class="carrito-producto-precio">
        <small>precio</small>
        <p>${producto.precio}</p>
    </div>

    <div class="carrito-producto-subtotal">
        <small>subtotal</small>
        <p>${producto.precio * producto.cantidad}</p>
    </div>
    <button class="carrito-producto-eliminar" id ="${producto.id}><i class="bi bi-trash-fill"></i></button>

    `

    contenedorCarritoProductos.append(div);
})
}
