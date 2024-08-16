import { obtenerUsuarios } from "../services/getUsers";

let etiquetaP1 = document.getElementById("etiquetaP1")
let etiquetaP2 = document.getElementById("etiquetaP2")

resolverPromesa()
async function resolverPromesa() {
    let infoUsuarios = await obtenerUsuarios()

    console.log(infoUsuarios[0].nombre);

    etiquetaP1.innerHTML = (infoUsuarios[0].nombre);
    etiquetaP2.innerHTML = (infoUsuarios[0].apellido);  

}


setInterval(function () {
        console.log("mostrar mensaje cada 5 segundos");   
}, 5000)



