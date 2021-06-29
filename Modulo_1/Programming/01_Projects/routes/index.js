//creacion del router
///Traemos el paquete
const { Router } = require('express');
const { User } = require('../lib/Schemas/User');
///Iniciamos Router
//const data = require("./data.json")
const router = Router()
//Trear Middleware
const {DataValidator} = require("../middlewares/DataValidator")

//Creacion de endpoint
router
    .get("/", (req,res) => {    
        res.send("Hola mundo con ExpresJs");
    })
    .get("/saludo",DataValidator("query", User), (req,res)=>{
        //req .query -accedo a todo lo que venga en el query
        //console.log(req.query);
        const {query:{nombre, apellido}} = req
        //const nombre = req.query.nombre
        //const nombre = req.query.apellido
        res.json({
            "Saludo":`Hola soy ${nombre}  ${apellido}`,
        });
    })
    .get("/saludo/:nombre",(req,res)=>{
        //console.log(req);
        console.log(req.params);
        const {params:{nombre}} = req
        //const nombre = req.params.nombre
        res.json({
            nombre:nombre,
        })
    })
    


//implementacion


///Exportamos los archivos de rutas
module.exports.RouterIndex = router
//midelwere con express(REVISAR)