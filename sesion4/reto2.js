////Funcion que recibe como parametro un array y retorna un objeto.
////Donde los elementos 0 y pares son las keys y los nones son los values

var carro = ["brand", "Nisan", "Dueño", "Juan"]

function arrayToObject(arr){
    var obj = {};

    for (var i = 0; i < arr.length; i+=2){
        var key = arr[i];
        var value = arr[i + 1];
        obj [key] = value;
    }

    return obj;
}

console.log(arrayToObject(carro))