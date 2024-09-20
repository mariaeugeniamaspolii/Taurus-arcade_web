
//en la pag siguiente (formulario.html) imprimimos el producto en el html

//Variables
const tituloProducto= document.querySelector('#tituloProducto');
const precioProducto= document.querySelector('#precioProducto');
const imagenProducto= document.querySelector('#imagenProducto');
const imagenVariableProducto= document.querySelector('#imagenProducto').getAttribute('src');
const botonCompra= document.querySelector('#botonCompra')
//const select = document.querySelector("#dropdown");
//const button = document.querySelector('#option-button');
//const selectLabel = document.querySelector('#select-label');

//Obtenemos string edel objeto del localStorage
const productJSON=localStorage.getItem('product');
//Lo convertimos a obj
const productObj= JSON.parse(productJSON);

document.addEventListener('DOMContentLoaded', function() {
    
    imprimirProducto()	
})

function imprimirProducto(){
    
    
    //atributo del objeto
    tituloProducto.innerHTML= (productObj.nombre);
    precioProducto.innerHTML= 'U$S'+(productObj.precio);
    imagenProducto.setAttribute("src", (productObj.img));
    botonCompra.setAttribute("href", (productObj.url));
    
}