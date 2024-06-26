function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:


if (array [0] !== array [1]) {
  return false
}

let resultado = 0

for (var i = 0; i < array.length; i++){
resultado = resultado === array [i]
}

return true

}

module.exports = todosIguales;
