// If else
var time = 12;

// Variable sin declarar.
var greeting;

if (time < 12){
    greeting = "Good morning";
} else if (time < 20){
    greeting = "Good afternom";
} else if (time < 24){
    greeting = "Good evening";
} 
else{
  greeting = "Ya te pasaste jaja"
}

console.log(greeting)

// Switch

var day = 5;
var text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday

// Ciclo for

for(var i = 0; i<=200; i++){
    console.log("Hello World");
  }