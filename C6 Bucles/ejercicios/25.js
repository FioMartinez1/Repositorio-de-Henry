function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

// var palabra = string.replace(/ /g, "").toLowerCase();

// var j = palabra.length -1;

// for (var i = 0; i < palabra.length; i++) {
//    if(palabra[i] !== palabra[j]) return false;
//    j--;   
// }

// return true;

var palindromo = string.split(" ") 

var palindromoInvertido = palindromo.reverse ()

for (var i = 0; i < string.length - 1; i++)
if (palindromoInvertido [i] === palindro [1]) return true;
else return false;






}




module.exports = esPalindromo;
