const pais = document.getElementById('filtro')

pais?.addEventListener('change', function() {
    console.log ("Opcion seleccionada:", pais.value)
})

const prueba = document.querySelector('.form-style')

//inputNombre.addEventListener('focus', function () {
// console.log('Se tiene el foco')
//})


prueba.addEventListener('click', function(event){
    const element = event.target

    element?.classList.contains('aply-button')
        event.preventDefault()
        element.classList.add('is-aplied')
        element.disabled = true
        element.textContent = "Aplicado!"

    }
    )

