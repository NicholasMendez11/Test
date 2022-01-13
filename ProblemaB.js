const process = require('process');
console.log(`Ingrese las contraseña  a evaluar separandolas con coma (,). 
Asegurese de que las contraseña cumplan con los siguientes requisitos. 
1. al menos una letra minuscula
2. Al menos una letra mayuscula
3. Al memos un numero
4. Al menos un caracter especial ($,!,@,%) 
5. Longitud minma de 6 caracteres y maxima de 12`);
let userInput = process.openStdin();

userInput.addListener("data",function(entrada){
  let password = entrada.toString().trim();
  let passwordArray = password.split(",")
  let verificador = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/ 
  let passApproved = passwordArray.filter(function(passwordArray){
    return verificador.test(passwordArray.trim()) == true;
  })
  let passDiscard = passwordArray.filter(function(passwordArray){
    return verificador.test(passwordArray.trim()) == false;
  })
  console.log(`
  contraseñas validas: ${passApproved.join(",")}
  contraseñas invalidas: ${passDiscard} `)
})