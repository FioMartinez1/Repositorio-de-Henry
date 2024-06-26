function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var resultado = []

  for (var i = 0; i < array.length; i++) {
    var resultadoFinal = array[i] * i;
    resultado.push(resultadoFinal)
  }
    
  return resultado
}





module.exports = multiplicarElementosPorIndice;
