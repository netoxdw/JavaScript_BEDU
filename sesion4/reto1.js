// La funcion retorna el promedio de todos los numeros que contiene el array numbers

var numbers = [1, 2, 3, 5, 6, 7];

function calculateAverage(numbers){
    var suma = 0;

    for (var i = 0; i < numbers.length; i++){
        suma += numbers[i]; // as suma = suma + numbers[i]
    }
    return suma / numbers.length;
}

console.log(calculateAverage(numbers))