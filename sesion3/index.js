function diHola (){
    alert("hola")
}

// Example 1

function calculateAge(birthyear){
    const birthYear = birthyear;//new Date(birthyear);
    const actuallyYear = 2023;//new Date().getFullYear();
    const age = actuallyYear - birthYear;
    return age;
}

console.log(calculateAge(1999));



function calculateAgeDinamic(birthyear){
    const birthYear = new Date(birthyear);
    const actuallyYear = new Date().getFullYear();
    const age = actuallyYear - birthYear;
    return age;
}

console.log(calculateAgeDinamic(1999));

function makeNoise (){
    console.log('Pling')
}

// Funcion exponente Reto 1

function power(base, exponente){
    let resultado = 1;
    for(let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado
}

// Reto 2 Funcion que retorna el numero mayor
function getLergerInt (number1, number2){
    if (number1 > number2){
        return number1
    }else{
        return number2
    }
}

// Reto 3 fibonacci 
function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(var i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }