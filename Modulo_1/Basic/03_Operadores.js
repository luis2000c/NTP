/*
Asignación
=
Comparación
==
===Verificar que sea igual(Recomendado)

console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');

!= (permite verificar que no sean iguales los valores)

console.log(2 != 3);

> < >= <=

//Operadores de asignación compuestos
+=
-=
/
**
%


var num = 3

num -= 2

console.log(num)

//Operadores Aritméticos

+ - * / % **

//Destructurar Objetos

*/
var persona = {
 nombre : "Luis",
 apellido:"Cajas",
 edad:20,
 viajes:{destino:"Colombia",destino2:"Mexico"}
};

var {nombre:nom, apellido,viajes:{destino}} = persona;

console.log(nom);
console.log(apellido);
console.log(destino);

