//Pequeñas funciones que psan por el medio del request
const {User} = require("../lib/Schemas/User")
function DataValidator(check = "query",schema) {
    return (req, res, next) => {
        var data = req[check]
        const {error, value} = schema.validate(data)
        if(error){
            res.status(406).json({
                msg : error.details[0].message,
            })
        }else{
            req[req] = value
            next()
        }
    }
}


// function DataValidator(req, res, next) {
//     //Modificamos el request
//     req.pruebaDeMiddleWare = "Hola mundo con middlewares"
//     next()

// }

module.exports.DataValidator = DataValidator;
