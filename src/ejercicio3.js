// Inserte el código aquí

////////////////////////////////////////Parte 2/////////////////////////////////////


function clonarArreglo () {
    const lista = [1, 2, 3]

    const nuevaLista = [... lista]
    return nuevaLista
}

////////////////////////////////////////Parte 3/////////////////////////////////////

function clonarObjeto() {
    let persona = {
        nombre: "Maria",
        edad: 20,
    }

    let nuevaPersona = {...persona}
    return nuevaPersona
}


////////////////////////////////////////Parte 4/////////////////////////////////////

function sumar(...numeros) {
    return numeros.reduce((acumulador, valorActual) => {
        return acumulador + valorActual
    }, 0)
}

sumar(1, 2, 3, 4)


////////////////////////////////////////Parte 5/////////////////////////////////////

function saludar(nombre1 = "Desconocido") {

    return ("hola", nombre1)
}














// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };