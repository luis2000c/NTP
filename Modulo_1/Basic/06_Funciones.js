//Declarativas son las funciones clasicas en cuantoa una función
//Retorno de valores
function saludar() {
    return "Hoal soy Luis"
}
var resultado = saludar();

//console.log(resultado);
//console.log(saludar());
//Funciones void
function saludar2() {
    //console.log("Hola soy Luis 2");
}

saludar2()

//funciones con parametros
function saludarConParametros(nombre, apellido, edad) {
    return `Hola soy ${nombre} ${apellido}`;
}
//console.log(saludarConParametros("Luis","Cajas",20));

//funciones con parametros por defecto

function saludoConProfesion(nombre,profesion="Analisis de sitemas") {
    return `Hola soy ${nombre} mi profesión es ${profesion}`;
}

//console.log(saludoConProfesion("Luis","Desarrollador de software"));


////Funciones Expresivas-Funciones Anónimas
///
//Pequeñas expresiones almacenadas en variables
var saludoConEdad = function(nombre,edad) {
    return `hOLA soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Luis",20));

///Arrow functions - Funciones flecha
var saludoConApellido = (nombre,apellido) => {
    return `Hola ${nombre} ${apellido}`
}

var saludoConApellido2 = (nombre,apellido) => `Hola ${nombre} ${apellido}`

var sum = (n1,n2) => n1 + n2;

//console.log(saludoConApellido("Luis","Cajas"));

//console.log(sum(2,3));

/* Funciones como parametros de otras funciones */
//cb una funcion dentro de otra

function saludConFunciones(nombre,cb) {
    return cb(nombre)
}

var miSaludo = saludConFunciones("Luis",function(nombre) {
return `Hola soy ${nombre}`
}) 

console.log(miSaludo);

var miSaludo2 = saludConFunciones("Luis",(nombre) =>`Hola soy ${nombre}`) 
//Ejecuta un fragmento de código desues de un cierto tiempo
/*
setTimeout(() => {
    console.log("Hola Mundo");
}, 3000);

setInterval(() => {
    console.log("Hola");
}, 2000);
*/