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
//Nodemon va a mantener vivo el programa y mantener los cambios visibles
//npm i -D -E nodemon
//EL INDEX ANTES
// app.get('/',(req,res) => {
//     res.send("Hola Mundo")
// })
// app.get("/saludo",(req,res)=>{
//     //req .query -accedo a todo lo que venga en el query
//     console.log(req.query);
//     const {query:{nombre, apellido}} = req
//     //const nombre = req.query.nombre
//     //const nombre = req.query.apellido
//     res.json({
//         "Saludo":`Hola soy ${nombre}  ${apellido}`,
//     });
// });
// //Parámetro
// app.get("/saludo/:nombre",(req,res)=>{
//     console.log(req);
//     console.log(req.params);
//     const {params:{nombre}} = req
//     //const nombre = req.params.nombre
//     res.json({
//         nombre:nombre,
//     })
// })

const { RouterIndex } = require('./routes/index')

app.use("/", RouterIndex)
// app.use("/user",RouterIndex)
// app.use("/user/data",RouterIndex)
/**
 "/" + "/" = "//" => "/"
 "/" + "/saludo" => "//saludo" => "/saludo"
 */
app.listen(3000,() => {
    console.log("Servidor escuchando en http://localhost:3000");
})

//Datos para enviar al servidor
//query-
//params


