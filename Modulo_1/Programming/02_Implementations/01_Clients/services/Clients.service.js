
const { MongoConnection } = require("../lib/Mongo")


//Collection
const COLLECTION = "clients";

const findUsers = () => new Promise(async (resolve, reject) => {
    try {
        //Inicializo mongoclient para que me retorne la configuracion de la db
        const DB = await  MongoConnection()
        //Obtenemos la colección
        const clients = DB.collection(COLLECTION)
        const clientList = await clients.find({}).toArray()
        resolve(clientList)
    } catch (error) {
        reject(error)
    }

})

module.exports = {
    findUsers,
}