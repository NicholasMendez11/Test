const process = require('process');
console.log(`Inserte una oracion o frase y el programa le devolvera la frecuencia de cada palabra`)
let userInput = process.openStdin();

userInput.addListener("data", function(entrada){
    let texo = entrada.toString().trim().toLowerCase();
    let textoArray = texo.split(" ").sort()
    let palabras = {};

    textoArray.map(function(posicion){
    if(palabras[posicion]){
       palabras[posicion]++
    }else{
       palabras[posicion] = 1}
    })
    
    for (const veces in palabras) {
        console.log(`${veces}: ${palabras[veces]}`);
      }




})