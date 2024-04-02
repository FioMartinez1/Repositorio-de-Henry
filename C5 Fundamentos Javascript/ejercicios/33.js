function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  var i = numero / numero === 1
  var iSegunda = numero / 1 === numero

while (var i % var i === 1 && var iSegunda % 1 === var i){
  return true;
} else {
  return false;
}


// if (numero % numero === 1){
//   return true;
// } else if (numero % 1 === numero) {
//   return true;
// } else {
//   return false
// }


}

module.exports = esNumeroPrimo;
