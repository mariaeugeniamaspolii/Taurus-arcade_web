//Variables
const ahora= document.querySelector('#ahora');
const select = document.querySelector("#dropdown");
const button = document.querySelector('#option-button');
const selectLabel = document.querySelector('#select-label');

document.addEventListener('DOMContentLoaded', function() {
	
	
	llenarElSelect();
	const options = document.querySelectorAll(".option");
	
	button.addEventListener("click", function (e) {
		e.preventDefault();
		toggleHidden();
	});
	
	function toggleHidden() {
		select.classList.toggle("hidden");
	}
	
	options.forEach(function(option) {
		option.addEventListener("click", function (e) {
			setSelectTitle(e);
			setSelectLink(e);
		});
	});
	
	function setSelectTitle(e) {
		const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
		selectLabel.innerText = labelElement;
		toggleHidden();
	};
	
	
})


function llenarElSelect(){
	
	productos.forEach( producto =>{
		
		console.log(producto.nombre)
		const inputProducto = document.createElement('input');
		inputProducto.classList.add("option");
        inputProducto.type= "radio";
		inputProducto.id=`${producto.id}` ;
        inputProducto.name= "producto";
        inputProducto.value= `${producto.id}`;
		
        const labelProducto = document.createElement('label');
		labelProducto.textContent= `${producto.nombre}` ;
		labelProducto.classList.add("select-item");
        labelProducto.htmlFor= `${producto.id}`;
		
		select.appendChild(inputProducto);
		select.appendChild(labelProducto);
		console.log(inputProducto)
		console.log(labelProducto);
		
    })
}

/*
<input class="option" type="radio" id="select-internet" name="producto" value="internet" link="https://www.google.com/" src="//assets/img/Bartop/estandar/2.jpg" arcade="Arcade 1">
<label class="select-item" for="select-internet">Arcade 1</label>

<input class="option" type="radio" id="select-family" name="producto" value="family" link="https://www.facebook.com/">
<label class="select-item" for="select-family">Arcade 2</label>

<input class="option" type="radio" id="select-existing" name="producto" value="existing" link="https://www.instagram.com/">
<label class="select-item" for="select-existing">Arcade 3</label>
*/


// FORMULARIO HREF//
function setSelectLink(e) {
	let selectProduct = document.querySelector(`#${e.target.id}`);
	const linkVariable = selectProduct.getAttribute('link');

	const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
	//selectLabel.innerText = labelElement;
	console.log(labelElement);
	
	
	let elLink = document.querySelector("#linkCompra");
	let linkCompra = elLink.getAttribute('href');
	
	selectProduct.setAttribute("link", linkVariable);
	elLink.setAttribute("href", linkVariable);
	
	console.log(linkVariable);
	console.log(linkCompra);

	function setProduct(e) {
		let selectProduct = document.querySelector(`#${e.target.id}`);
		const srcVariable = selectProduct.getAttribute('src');
		//const arcadeVariable = selectProduct.getAttribute('arcade');
	
		console.log(srcVariable);
		
		let nombreProducto = document.querySelector("#nombreProducto");
		let imgProducto = document.querySelector("#imgProducto");
		let precioProducto = document.querySelector("#precioProducto");
	
		//nombreProducto.innerText = arcadeVariable;
		//precioProducto.innerText = precioVariable;
		imgProducto.setAttribute("src", imgVariable);
		nombreProducto.innerHTML = labelElement;
	
	}
};
