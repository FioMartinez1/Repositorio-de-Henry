function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

let NumeroMinimo = Math.min(...numeros);

let NumeroMaximo = Math.max (...numeros);

let SumaEsperada = 0;

for(let i = NumeroMinimo; i <= NumeroMaximo; i++){

  SumaEsperada = SumaEsperada + i;
}

let SumaActual = 0;

for(let i = 0; i < numeros.length; i++){

  SumaActual = SumaActual + numeros [i];
}

let NumFaltante = SumaEsperada - SumaActual;

return NumFaltante




} 



let resultado = Math.min(...[1, 2, 4, 5, 6])
console.log(resultado) 




module.exports = encontrarNumeroFaltante;