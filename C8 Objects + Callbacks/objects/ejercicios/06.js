const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

let ContarProp = 0;

for (let propiedades in objeto){
  ContarProp++;
}
return ContarProp

};

module.exports = contarPropiedades;
