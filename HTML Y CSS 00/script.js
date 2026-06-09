const botones = document.querySelectorAll("#boton-importante")

botones.forEach( function (boton) {
boton.addEventListener ('click',  function(){
    boton.textContent = 'Aplicado!';
    boton.style.backgroundColor = '#22c55e' ;
})
})