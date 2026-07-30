const pais = document.getElementById('filtro')

pais?.addEventListener('change', function() {
    console.log ("Opcion seleccionada:", pais.value)
})

const prueba = document.querySelector('.form-style')
const opcion = document.querySelectorAll('.opcion')

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
        console.log(element.dataset.modalidad)
        
        opcion.forEach(op => {
            const modalidad = op.dataset.modalidad
            if (element.dataset.modalidad === '' || element.dataset.modalidad === modalidad) {
                op.style.display = 'flex'
            } else {
                op.style.display = 'none'
            }
        })


    }
    )

fetch('/lista.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('contenedor')
        contenedor.innerHTML = ''
        data.forEach(item => {
            const div = document.createElement('div')
            div.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>${item.edad}</p>
            `
            contenedor.appendChild(div)
        })
    })