document.addEventListener('DOMContentLoaded', function() {
    
        //MY INPUTS
        const inputNombre = document.querySelector('#nombre');
        const inputEmail = document.querySelector('#email');
        const inputCelular = document.querySelector('#celular');


    const email = {
        email: '',
        asunto: '',
        mensaje: ''    
    }


    //seleccionamos los inputs
    const inputAsunto = document.querySelector('#asunto');
    const inputCc = document.querySelector('#Cc');
    const inputMensaje = document.querySelector('#mensaje');
    const inputFormulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //asignamos eventos a los inputs
    //inputEmail.addEventListener('blur', function(e){ //blur dispara cuando sale del input
    //    console.log(e.target.value);                 // este codigo se vuelve repetitivo para usar en cada input
    //})
    
    
    //evento para todos los inputs usando la misma funcion (validar)
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCc.addEventListener('input', validarCc);
    
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e){
        //prevenimos que resetee 
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(() =>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario()

            //crear alerta de enviado
            const alertaExito = document.createElement('p');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent= 'Mensaje enviado con éxito';
            formulario.appendChild(alertaExito);

            setTimeout(() =>{
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }



    // si está vacío esta bien - entonces
    // si ! a vacío tiene que chequear el mail

    function validarCc(e){
        
        if (e.target.id === 'Cc' && !validarEmail(e.target.value) && e.target.value !== ''){
            mostrarAlerta('el em no es valido', e.target.parentElement );
            email[e.target.id] = '';
            comprobarEmail();
            return;
        } else{

            limpiarAlerta(e.target.parentElement);
            //Asignar los valores
            email[e.target.id] = e.target.value.trim().toLowerCase(); 
            
            //comprobar el objeto mail
            comprobarEmail();
        }
}
    
    //funcion para validar
    function validar (e){
        if (e.target.value.trim() === '') { //.trim() metodo para cortar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        } 
        if (e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('el email no es valido', e.target.parentElement );
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
            limpiarAlerta(e.target.parentElement);
            //Asignar los valores
            email[e.target.id] = e.target.value.trim().toLowerCase(); 
            
            //comprobar el objeto mail
            comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia)
        
        //generar alerta html
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //inyectar el error en el formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
       //comprueba si ya existe la alerta
       const alerta = referencia.querySelector('.bg-red-600');
       if(alerta){
           alerta.remove();
       }
    }

    function validarEmail(email){
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return

        }else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

    function resetFormulario() {
        
        //reiniciar el objeto
        email.email= '';
        email.Cc= '';
        email.asunto= '';
        email.mensaje= '';

        formulario.reset();
        comprobarEmail();
    }
})