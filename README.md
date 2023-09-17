>>Arrays.

Los arrays estan representados por corchetes [] y pueden agrupar n cantidad de valores.
Ejemplo:

var colores = ["rojo", "verde", "azul"]

>>Identificador. Esta indexado comenzando desde 0 

var colores = [0, 1, 2]

>>Acceder a un elemento.
Primer elemento
colores[0]

Ultimo elemento
colores[colores.length -1]

>>Recorrer un array.
forEach
 colors.forEach(function(elemento, indice, array){
  console.log(elemento, indice);
 })

for
 for (var i=0; i<colors.lenght; i++;){
  console.log(colors[i] + " " + i);
 }

 

