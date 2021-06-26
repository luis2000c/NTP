const { Router } = require('express');
const data = require("../data.json")
const router = Router()

//Modificacion de datos en mayúsculas
var modifDatos = data.map((usuarios) => {
    usuarios.first_name = usuarios.first_name.toUpperCase()
    usuarios.last_name = usuarios.last_name.toUpperCase()
    return usuarios
})

router
    .get("/", (req, res) => {
        res.send("Que empiece el juego con ExpressJS")
    })
    .get("/users", (req, res) => {
        res.json({
            msg: "Lista de Usuario En Mayúsculas",
            body: [modifDatos]
        })
    })
    .get("/users-query", (req, res) => {
        const { query: { id } } = req
        var usuarioFilter = modifDatos.filter(person => person.id == id)
        if (id != null) {
            res.json({
                msg: "Retornar el objeto segun el Id del usuario",
                body: [usuarioFilter]
            })
        } else {
            res.json({
                msg: "Lista de Usuario En Mayúsculas",
                body: [modifDatos]
            })
        }


    })
    .get("/users-params/:apellido", (req, res) => {
        var { params: { apellido } } = req
        var apellidoPlus = apellido.toUpperCase()
        var buscarEmail = modifDatos
            .filter(function (ape) {
                return ape.last_name === apellidoPlus
            }).map(function (ape) {
                return ape.email
            })

        var ban = false
        for (const ape of data) {
            if (apellidoPlus === ape.last_name) {
                ban = true
                break;

            }

        }

        if (ban == true) {
            res.json({
                msg: "Email Según el apellido",
                body: [{ email: buscarEmail }]

            });

        } else {
            res.json({
                msg: "El apellido no existe",
                body: []

            });
        }







    })


module.exports.RouterIndexDeber = router