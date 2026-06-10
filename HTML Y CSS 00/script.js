//OPCION 1
//const botones = document.querySelectorAll(".button-apply-job")

//botones.forEach( function (boton) {
//boton.addEventListener ('click',  function(){
  //  boton.textContent = 'Aplicado!';
  //  boton.style.backgroundColor = '#22c55e' ;
  //  boton.disabled = true;
//})
//})

//OPCION 2

const container = document.querySelector('.jobs-listings');

container.addEventListener('click', function (event) {

  if (event.target.classList.contains('button-apply-job')) {

    const boton = event.target;

    boton.textContent = '¡Aplicado!';
    boton.style.backgroundColor = '#22c55e';
    boton.disabled = true;
  }

});