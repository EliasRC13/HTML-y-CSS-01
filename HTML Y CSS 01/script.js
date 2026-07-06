const pais = document.getElementById('filtro')

pais?.addEventListener('change', function() {
    console.log ("Opcion seleccionada:", pais.value)
})

const prueba = document.getElementById('prueba')

//inputNombre.addEventListener('focus', function () {
// console.log('Se tiene el foco')
//})
const inputNombre = document.getElementById('input-nombre')

prueba.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Bienvenido', inputNombre.value)
})

