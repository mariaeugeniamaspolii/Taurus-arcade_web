



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

