var nums = [1,2,3,4,5]
var nums2 = [6,7,8,9,0]
//console.log(nums)
///concat une a dos arrglos pero no modifica el original
var nuevoNumeros = nums.concat(nums2)

//console.log(nuevoNumeros)
/**Join- une todo el arreglo con un parametro y lo convierte en un string*/
var nombre = ["l","l","u","i","i","s"]
var nombre2 = ["l","u","i","s"]
//console.log(nombre.join(""));

/*SLICE imprime desde esa posicion*/
console.log(nombre.slice(2));

/*Index Of - muestra la posicion del caracter*/

console.log(nombre.indexOf("s"));

/*last Index Of - va a ver la ultima vez que un caracter se repita dentro del arreglo*/
console.log(nombre.lastIndexOf("l"));

/*reverse - invierte el array*/
console.log(nombre2.reverse());

/* Sort - ordena */
var numDesordenados = [3,6,1,7,2,5,2,1,8,3]
console.log(numDesordenados.sort())

/* Shift - Devuelve el primer elemento de un arreglo */
console.log(numDesordenados.shift())
/* POP - Devuelve el ultimo elemento de un arreglo */
console.log(numDesordenados.pop())
/* PUSH - agrega valores al array */
console.log(numDesordenados.push(1012))
console.log(numDesordenados);

//var pares = [2,4,6,8,10]

//console.log(pares.map((element)=>elemento+1))
//Consultar funciones de arreglos JavaScript
var array = [0,1,2,3,4,5,6]
/*1-forEach- ejecuta la función indicada una vez por cada elemento del array*/
array.forEach(item => {
    console.log(item);
});
/*2-includes - determina si un array incluye un determinado elemento, devuelve true o false según corresponda*/
console.log(array.includes(4));
console.log(array.includes(7));
/*3-filter - crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada*/
var filtrado = array.filter(num => num > 4)
console.log(filtrado);
/*4-reduce - aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor*/
var suma = array.reduce((total,valor)=>total+valor,0)
//En este caso el incremento es de 0
console.log(suma);
/*5-some - verifica si algún elemento de un array cumple con el test implementado por la función brindada*/
var condicionCero = array.some(num => num <= 0)
console.log(condicionCero);