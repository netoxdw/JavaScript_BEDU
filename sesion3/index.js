function diHola (){
    alert("hola")
}

// Example 1

function calculateAge(birthyear){
    const birthYear = new Date(birthyear);
    const actuallyYear = new Date().getFullYear();
    const age = actuallyYear - birthYear;
    return age;
}

console.log(calculateAge(1999));