function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let NuevoArray = [];

  let iteraciones = 0;

  
  while (iteraciones < 10){
    iteraciones = iteraciones + 1;
  
  if(iteraciones === 5){
    continue;
  }

  num = num + 2;
  
  NuevoArray.push(num)
  
  }
  
  return NuevoArray;


}

module.exports = continueStatement;
