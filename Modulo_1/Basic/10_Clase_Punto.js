/**
 DEBER implementar metodos estaticos - Clase Punto, Function distancia
 */
class punto {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    static distancia (a, b){
        const distx = a.x - b.x
        const disty = a.y - b.y

        return Math.sqrt(distx * distx + disty * disty )
    }
}
randomP1 = Math.floor((Math.random()* (50-30 + 1)) + 30)
randomP2 = Math.floor((Math.random()* (100-80 + 1)) + 80)

var p1 = new punto(randomP1,randomP1)
var p2 = new punto(randomP2,randomP2)

console.log(punto.distancia(p1,p2));