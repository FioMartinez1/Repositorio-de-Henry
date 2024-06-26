function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

if (array.length === 0){
  return 0
}

var numero = Math.max(...array);

return array.indexOf(numero);

}



encontrarIndiceMayor ([2,3,4,9])

module.exports = encontrarIndiceMayor;
