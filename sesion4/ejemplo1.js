
var numbers = [1, 2, 3, 5];


function multiplyByTwo(numbers){
    var multipliedNumbers = [];

    for (var i = 0; i < numbers.length; i++){
        multipliedNumbers.push(numbers[i] *2)
    }

    return multipliedNumbers;
}
    var numbers = [1, 2, 3, 5];


console.log(multiplyByTwo(numbers))

