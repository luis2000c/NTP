/*
    Async - await
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

(async ()=>{
    try {
        var respuesta = await promesa(true)
        var respuesta2 = await promesa(true)
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.log(error);
    }
})()