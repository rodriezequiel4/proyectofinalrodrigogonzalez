// productos
const productos =[
    {   
        id:"mate-01",
        titulo:"mate01",
        imagen: "./img/mate.jpg",
        categoria: {
            nombre:"mates",
            id:"mates"
        },
        precio:9500
    },
    {   
        id:"mate-02",
        titulo:"mate02",
        imagen: "./img/camioner.jpg",
        categoria: {
            nombre:"mates",
            id:"mates"
        },
        precio:8500
    },
    
    {   
        id:"mate-03",
        titulo:"mate03",
        imagen: "./img/mate.jpg",
        categoria: {
            nombre:"mates",
            id:"mates"
        },
        precio:7500
    },
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

     productosElegidos.forEach(producto =>{
         const div = document.createElement("div");
        div.classList.add("producto");
         div.innerHTML =`   <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"> 
         <div class="producto-detalles"> 
         <h3 class="producto-titulo">${producto.titulo}</h3>
         <p class="producto-precio">${producto.precio}</p>
         <button class="producto-agregar" id="${producto.id}">agregar</button>
         </div>
         ` ;
        contenedorProductos.append(div);

     })

     actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e)=>{


     botonesCategorias.forEach(boton => boton.classList.remove("active"));
       e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos"){
    const productoCategoria = productos.find(producto=>producto.categoria.id === e.currentTarget.id);
    tituloPrincipal.innerText = productoCategoria.categoria.nombre;
    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    cargarProductos(productosBoton);

    }   else {
    tituloPrincipal.innerText = "todos los productos";
   cargarProductos(productos) ;
    }
        
    })
});

function actualizarBotonesAgregar(){
botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton =>{
    boton.addEventListener("click", agregarAlCarrito);
});  
}

const productosEnCarrito  = [];
function agregarAlCarrito(e){

 const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto=> producto.id ===idBoton)){

    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
}
function actualizarNumerito(){
    let numerito = productosEnCarrito.reduce((acc , producto) =>acc + producto.cantidad, 0);
    console.log(numerito)
}