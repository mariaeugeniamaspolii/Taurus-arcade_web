$(document).ready(inicio);

function inicio(){
    

  
let thumbnails = document.getElementsByClassName('thumbnail')
  let activeImages = document.getElementsByClassName('active')

  for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
      console.log(activeImages)
      
      if (activeImages.length > 0){
        activeImages[0].classList.remove('active')
      }
      

      this.classList.add('active')
      document.getElementById(this.name).src = this.src
    })
  }


  let buttonRight = document.getElementsByClass('slideRight');
  let buttonLeft = document.getElementsByClass('slideLeft');
  let slider = document.getElementsByClass('slider');

  for (var i=0; i < buttonRight.length; i++){

    buttonRight[i].addEventListener('click', function(){

      console.log(slider)
      
      if (slider.length > 0){
        slider[0].classList.remove('toSlide')
      }

      this.classList.add('toSlide')
      document.getElementById(this.name).scrollLeft += 180
  })
}

  buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
  })

  jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
}