function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   var dividirTexto = texto.split ('')

   var revertirTexto = dividirTexto.reverse ()

   var nuevoStringInvertido = revertirTexto.join ('')

   
      return nuevoStringInvertido



   }



   

module.exports = invertirTexto;
