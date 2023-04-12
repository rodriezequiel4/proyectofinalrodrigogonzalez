// productos
const productos =[
    {   
        id:"mate-01",
        titulo:"mate01",
        imagen: "./img/mate.jpg",
        categoria: {
            nombre:"abrigos",
            id:"abrigos"
        },
        precio:9500
    },
    {   
        id:"mate-02",
        titulo:"mate02",
        imagen: "./img/camioner.jpg",
        categoria: {
            nombre:"abrigos",
            id:"abrigos"
        },
        precio:8500
    },
    
    {   
        id:"mate-03",
        titulo:"mate03",
        imagen: "./img/mate.jpg",
        categoria: {
            nombre:"abrigos",
            id:"abrigos"
        },
        precio:7500
    },
    


]



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");



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

}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e)=>{


     botonesCategorias.forEach(boton=> boton.classList.remove("active"));

       e.currentTarget.classList.add("active");

if (e.currentTarget.id != "todos"){

    
    const productosBoton= productos.filter(producto=> producto.categoria.id=== e.currentTarget.id);
    
    cargarProductos(productosBoton);
}else {
   cargarProductos(productos) 
}
        
    })
});