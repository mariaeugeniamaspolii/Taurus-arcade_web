//const allContent= document.querySelector('#all-content');
const body= document.querySelector('#body');
//Body no puede ser porque todo lo que toques dentro de el tiene prevención por default

//productos.forEach(producto =)

cargarEventListeners();
function cargarEventListeners (){
    //cuando guardamos el producto presionando levantarProducto
    body.addEventListener('click', levantarProducto);
    body.addEventListener('auxclick', levantarProducto);
}


function levantarProducto(e){
    
    //e.preventDefault();

    if(e.target.classList.contains('levantarProducto')){
        const dataId= e.target.parentElement.getAttribute('data-id');

        //console.log(dataId);
        //console.log(productos);
        
        //filtra y agarra el del mismo id y lo guarda en un resultado
        const resultado= productos.filter(producto => dataId === producto.id)[0];
        //console.log(productos);
        console.log(resultado);
        
        //guardamos ese producto en localstorage
        const resultadoString= JSON.stringify(resultado);
        localStorage.setItem('product', resultadoString);
        localStorage.setItem('ok', 'va bien');
        
        console.log('hasta aca ok');
        
    }
}



//en la pag siguiente (formulario.html) imprimimos el producto en el html





