<?php

$mensajeEnviado = false;

if(isset($_GET['email']) && $_GET['email'] != ''){

  //if(){

    if( filter_var($_GET['email'], FILTER_VALIDATE_EMAIL) && !empty($_GET['nombre']) && !empty($_GET['celular'])){
        
        $nombre=$_GET['nombre'];
        $mail=$_GET['email'];
        $celular=$_GET['celular'];
        $producto= tituloProducto;
        
        
        $destinatario="maria.maspoli@outlook.es";
  
        $mensaje = '
            <html>
            <head>
            <title>Mail enviado desde TAURUS ARCADE</title>
            </head>
            <body style="background-color:black; color:white;"">
            <h1>Comprador:' .$nombre.'</h1>
                <p>Arcade:'.$producto.'</p> 
                <p>Numero de celular:'.$celular.'</p> 
            </body> 
            </html>
            ';
         
        // Cabecera que especifica que es un HMTL
        $cabeceras  = "MIME-Version: 1.0" . "\r\n";
        $cabeceras .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
         
        // Cabeceras adicionales
        $cabeceras .= "From: $mail". "\r\n";
        
        $enviado=mail($destinatario, $mensaje, $cabeceras);
  
        $mensajeEnviado = true;
    }
    else{
        $error_mail= "error-mail";
    }
 // }

}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=yes">

        <link rel="stylesheet" href="css/styles.min.css">
        <link rel="stylesheet" href="assets/bootstrap-icons/font/bootstrap-icons.css">

        <script src="js/jquery-3.5.1.min.js"></script>
        <script src="js/mail.js"></script>
        <script src="js/dropdown.js"></script>
        <script src="js/mailValidation.js"></script>

        <link rel="icon" href="assets/img/v logo celeste.svg">
        <title>Formulario</title>
    </head>
    <body class="">
    

       
       
    <!--Header desktop-->
    <header class="header desktop">
        <nav class="navbar navbar-expand-lg fixed-top justify-content-end py-3 px-3   bg-secondary shadow">
          <div class="navbar-container container-lg">
            <a href="index.html">
                <img src="assets/img/TAURUS LOGO v.svg" alt="taurus arcade" class="navbar-brand m-0 p-0">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end desktop" id="navbarText">
              <ul class="navbar-nav mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a class="nav-link px-3"  href="https://www.instagram.com/arcadetaurus/"><i class="bi bi-instagram"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-3" href="https://www.facebook.com/Taurus-Arcade-262277244565894"><i class="bi bi-facebook"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    <!--/Header-->


    <!--Header mobile-->
    <header class="header mobile">
        <nav class="navbar fixed-top py-3 px-3  bg-secondary shadow">
          <div class=" container-lg  justify-content-center">
            <a href="index.html">
                <img src="assets/img/TAURUS LOGO v.svg" alt="taurus arcade" class="navbar-brand m-0 p-0">
            </a>
        </nav>
      </header>
    <!--/Header-->

    <div class="content">
    <?php
    if($mensajeEnviado):      
    ?>

 
 
      <!--Nosotros-->
      <div class="nosotros-bg-mobile py-5">
        <div class="nosotros-bg">      
            <img src="assets/img/letters.png" alt="" class="letters">
            <img src="assets/img/mario.png" alt="" class="mario slideInUp">
        </div>
    
        <div class="container-lg px-4 px-lg-0">
            <div class="row">
                
                <section class="col-lg-6 col-12">
                    <img src="assets/img/mario.png" alt="" class="mobile mario-mobile slideInUp">
                    <div class="nosotros-text">
                      
                    <h3 class="text-start mb-3 nosotros-headline">Datos enviados!</h3>
                    <p class="special-text-1">Último paso</p>
                    
                       
                     
                      <!--producto-->
                      <div class="row mt-2">
                        <div class="col-12 col-lg-5 imagenProductoContainer">
                          <img class="" src="assets/img/Bartop/estandar/1.jpg" id="imagenProducto">
                        </div>
                  
                        <div class="col-12 col-lg-7 px-md-3 d-flex flex-wrap" id="infoProducto">
                          <h4 id="tituloProducto" class="text-start mt-4 mt-lg-0 mb-0">Bartop estandar 22"</h4>                
                          <p class="mt-3 mb-0 special-text-1"> <span class="special-text-2 precio" id="precioProducto"> U$S749</span> +iva </p> 
                          <p class=""> 2 mandos y 20 botones (con opción led)</p> 
                          <div class="row">
                            <p class="special-text-1"> Te rediriges a MercadoPago para finalizar la compra</p> 
                            <a href="" id="botonCompra"><button type="submit" value="" class="btn btn-primary btn-large mt-0">comprar</button></a>
                          </div>
                        </div>
                      </div>  
                  
                  </section>
              </div>
            </div>
        </div>    
        <!--/Nosotros-->

    


    <?php
    else:      
    ?>  
    
   
       <!--Nosotros-->
       <div class="nosotros-bg-mobile py-5">
          <div class="nosotros-bg">      
              <img src="assets/img/letters.png" alt="" class="letters">
              <img src="assets/img/mario.png" alt="" class="mario slideInUp">
          </div>
      
          <div class="container-lg px-4 px-lg-0">
              <div class="row">
                  
                  <section class="col-lg-6 col-12">
                      <img src="assets/img/mario.png" alt="" class="mobile mario-mobile slideInUp">
                      <div class="nosotros-text">
                        
                      <h3 class="text-start mb-3 nosotros-headline">Enviaremos un mail con tus datos de compra!</h3>
                      <p class="special-text-1">Todos los campos son obligatorios</p>

                      <form class="justify-content-between" action="formulario.php" enctype="text/plain" method="get" id="form">
                      <!--Nombre-->
                      <label for="nombre" class="col-form-label">Nombre</label>
                      <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" required>
                      <!--email-->
                      <label for="celular" class=" col-form-label">Celular</label>
                      <input type="text" class="form-control" name="celular" id="celular" class="form-control" placeholder="Celular" required>
                      <!--email-->
                      <label for="email" class=" col-form-label">E-mail</label>
                      <input type="text" class="form-control" name="email" id="email" class="form-control" placeholder="E-mail" required>
                       
                      <!--producto-->
                      <div class="row mt-4 mt-md-5">
                        <div class="col-12 col-lg-5 imagenProductoContainer">
                          <img class="" src="assets/img/Bartop/estandar/1.jpg" id="imagenProducto">
                        </div>
                  
                        <div class="col-12 col-lg-7 px-md-3 d-flex flex-wrap" id="infoProducto">
                          <h4 id="tituloProducto" class="text-start mt-4 mt-lg-0 mb-0">Bartop estandar 22"</h4>                
                          <p class="mt-3 mb-0 special-text-1"> <span class="special-text-2 precio" id="precioProducto"> U$S749</span> +iva </p> 
                          <p class=""> 2 mandos y 20 botones (con opción led)</p> 
                          <div class="row">
                            <a href="index.html" alt="" class=""><span class="special-text-2 contacto">Volver al inicio</span> </a>
                            <button type="submit" value="" class="btn btn-primary btn-large mt-3">enviar datos</button>
                          </div>
                        </div>
                      </div>  

                    </form>

                      <div id="spinner" class="hidden flex-justify-center">
                        <div class="sk-circle">
                            <div class="sk-circle1 sk-child"></div>
                            <div class="sk-circle2 sk-child"></div>
                            <div class="sk-circle3 sk-child"></div>
                            <div class="sk-circle4 sk-child"></div>
                            <div class="sk-circle5 sk-child"></div>
                            <div class="sk-circle6 sk-child"></div>
                            <div class="sk-circle7 sk-child"></div>
                            <div class="sk-circle8 sk-child"></div>
                            <div class="sk-circle9 sk-child"></div>
                            <div class="sk-circle10 sk-child"></div>
                            <div class="sk-circle11 sk-child"></div>
                            <div class="sk-circle12 sk-child"></div>
                        </div>
                    </div>
                    </section>
                </div>
              </div>
          </div>    
          <!--/Nosotros-->
        </div>
      </div>

  <?php
  endif;      
  ?>  

      
  <!--Footer-->
  <div class="footer footer-short-page">
    <script> 
    $(function(){ $(".footer").load("footer.html") });
  </script>
  </div>
  <!--/Footer-->
  
  <script src="js/imprimiendoProducto.js"></script>

</body>
</html>
