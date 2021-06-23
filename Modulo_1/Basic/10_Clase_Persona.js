/**
 DEBER implementar getters, setter y realizar una implementacion.
 */

class Persona {
    constructor(nom, ape,edad,deporte){
        this.nom = nom
        this.ape = ape
        this.edad = edad
        this.deporte = deporte
    }

    get DatosPersona(){
        return {
            ape: this.ape,
            edad: this.edad,
            deporte:this.deporte
        }
    }
    set cambioDatos(nuevosDatos){
        this.ape = nuevosDatos.ape
        this.edad = nuevosDatos.edad
        this.deporte = nuevosDatos.deporte
    }
}

var person = new Persona("Luis","Cajas","20","Basketball")

console.log(person.DatosPersona);

person.cambioDatos = {ape:"Toapanta",edad:21, deporte:"Futbol"}

console.log(person.DatosPersona);
