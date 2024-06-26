function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

let ArrayFinal = []

for (let i = 0; i <= 10; i ++){
  ArrayFinal.push([i] * 6)
} 
return ArrayFinal

  


}

module.exports = tablaDelSeis;
