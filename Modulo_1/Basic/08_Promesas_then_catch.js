//Son funciones especiales que ayuda a enviar una peticion y recibir la respuesta
/*
Promesas
*/

function promesa(bandera) {
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
            resolve("Petición resuelta");
            }, 3000);
        } else {
            reject("La operación fallo")
        }
        
    })
}
//.then retorna el valor si todo sale correctamente en caso de que falla nos lanza en catch
/*
promesa(true)
    .then((resultado)=>{
        console.log("Respuesta positiva", resultado)
    })
    .catch((error)=>{
        console.log("Error", error);
    })*/

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
        resolve("Petición resuelta");
        }, 3000);
    } else {
        reject("La operación fallo")
    }
})

segundaPromesa(true)
    .then((resultado)=>{
        console.log("Respuesta positiva", resultado)
    })
    .catch((error)=>{
        console.log("Error", error)
    })

promesa(true)//peticion de clientes
    .then((resultado)=>{//respuesta de lista de clientes
        console.log("Respuesta positiva", resultado)
        return segundaPromesa(true)
    })
    .then((resultado) => {//respuesta de la segunda promesa
        console.log("Respuesta positiva", resultado)
    })
    .catch((error)=>{
        console.log("Error", error)
    })