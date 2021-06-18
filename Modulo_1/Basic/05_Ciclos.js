/*while (condition) {
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
//Recorre objetos
var persona = {
    nombre : "Luis",
    apellido : "Cajas",
    viajes : ["a","b"]
}
for (const key in persona) {
   console.log(persona[key]);
}