const process = require('process');
console.log("Inserte tantas palabras como quiera separadas por una coma (,)");

var stdin = process.openStdin();

stdin.addListener("data", function(entrada) {
    texto  = " "+entrada.toString().toLowerCase().trim()
    textoArr = texto.split(",").sort()
    console.log(`\n La salida ordenada alfabeticamente es:${textoArr.join(",")}
    -Escriba otras palabras para continuar o ctrl + c para salir`)
});
  
 



  