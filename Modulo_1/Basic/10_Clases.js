//Prototipado
//Antes
//CARGAR LAS PROPIEDAS Y GENERAR EL OBJETO A NIVEL DE MEMORIA
function Rect(base, altura) {
    this.base = base
    this. altura = altura
}

Rect.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rect(6,3)


console.log(rectangulo.calcularArea());

//Declaracióno de clases

class Rect2 {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}

var rectangulo2 = new Rect2(6,3)
console.log(rectangulo2.calcularArea());

///Tareas
// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>
/*
    DEBER
*/
