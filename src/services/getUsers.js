

async function obtenerUsuarios() {
    try {
        const response = await fetch ("http://localhost:3001/users")
        const data = await response.json();
        console.log(data);
        return data

    } catch (error) {
        console.log(error);
        
    }
}



export {obtenerUsuarios}



