// Verbos HTTP
//GET-sOLICITAR INFORMACION
//POST MODIFICAR LA INFORMACION
//PUT MODIFICAR LOS DATOS DE ESE ENDPOINT
//DELETE ELIMINE ESE RECURSO

//Códigos de estado HTTP
//200-OK
//400-Error

const express = require('express');
//Genero una aplicación express
const app = express()
//EndPoint
app.get('/',(req,res) => {
    res.send("Hola Mundo con ExpressJS")
}).listen(3000,() => {
    console.log("Servidor escuchando en http://localhost:3000");
})


