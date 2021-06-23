//Qus rest y soap
const data = require('./data.json')

//console.log(data);

var modifData = data.map((person)=>{
    person.first_name = person.first_name.toUpperCase()
    return person
})

var filterResult = modifData.filter((person)=>person.id===3)
.map((person)=>{
    person.first_name = person.first_name.toLowerCase()
    return person
})

//console.log(modifData);
console.log(filterResult);
