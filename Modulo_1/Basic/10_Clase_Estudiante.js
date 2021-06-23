
/*
    DEBER  Construir clase Persona y estudiante, extender Estudiante con Persona>
*/
class Persona {
    constructor(nom, ape, deporte){
        this.nom = nom
        this.ape = ape
        this.deporte = deporte
    }

    traerPersona(){
        return this.nom, this.ape, this.deporte
    }

}


class Estudiante extends Persona{
    
    traerPersona(){
        console.log("Nuevo Estudiante: ",this.nom + " " + this.ape,
        "Su deporte favorito es: " + this.deporte)
    }

}

var person = new Estudiante("Luis","Cajas","Basketball")
person.traerPersona()