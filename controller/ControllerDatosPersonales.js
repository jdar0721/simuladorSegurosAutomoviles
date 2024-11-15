
// script.js

let datosUsuario = {}

const btnDatosUsuario = document.getElementById('btn-datos-usuario')
const selectCiudades = document.getElementById('ciudades');
const inputNombres = document.getElementById('nombres')
const inputTelefono = document.getElementById('telefono')
const inputCorreo = document.getElementById('correo')
const inputEdad = document.getElementById('edad')

btnDatosUsuario.addEventListener('click', () => {
    const ciudad = selectCiudades.value;
    const nombres = inputNombres.value;
    const telefono = inputTelefono.value;
    //...

    datosUsuario['ciudad'] = ciudad;
    datosUsuario['nombres'] = nombres;
    datosUsuario['telefono'] = telefono;
    datosUsuario['correo'] = correo;
    datosUsuario['edad'] = edad;

    //...
    printDatosUsuario()

})

// selectCiudades.addEventListener('change', function() {
//   const ciudadSeleccionada = selectCiudades.value;
//   console.log(ciudadSeleccionada)
//   datosUsuario['ciudad'] = ciudadSeleccionada;

//   printDatosUsuario()
// });




function printDatosUsuario() {
    console.log(datosUsuario)
}

