$(document).ready(inicio);

function inicio(){
    

var controlChange = document.querySelector('.control-page-button.desktop');
var controlChange2 = document.querySelector('.control-page-button2.desktop');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    controlChange.classList.add('d-block',);
    controlChange2.classList.add('d-block',);
    controlChange.classList.remove('d-none',);
    controlChange2.classList.remove('d-none',);
  } else {
    controlChange.classList.remove('d-block',);
      controlChange2.classList.remove('d-block',);
      controlChange.classList.add('d-none',);
      controlChange2.classList.add('d-none',);
      
    }
  });
  /*
  var controlChangeMobile = document.querySelector('.control-page-button.mobile');
  var controlChange2Mobile = document.querySelector('.control-page-button2.mobile');

  window.addEventListener("touchstart", function() {
    if (window.pageYOffset > 10) {
      controlChangeMobile.classList.add('d-block',);
      controlChange2Mobile.classList.add('d-block',);
    controlChangeMobile.classList.remove('d-none',);
    controlChange2Mobile.classList.remove('d-none',);
  } else {
    controlChangeMobile.classList.remove('d-block',);
    controlChange2Mobile.classList.remove('d-block',);
    controlChangeMobile.classList.add('d-none',);
    controlChange2Mobile.classList.add('d-none',);
    
  }
});
*/

}

