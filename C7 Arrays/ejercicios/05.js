function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  var nuevoArray = array.slice ()

  nuevoArray.unshift(elemento);

return nuevoArray;


}

module.exports = agregarItemAlComienzoDelArray;
