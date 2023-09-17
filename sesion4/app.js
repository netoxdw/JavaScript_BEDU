//Array
var colors = ['Red', 'Blue', 'Green'];

console.log(colors);
colors[1] = "Pink";
console.log(colors);
console.log(colors.length);

// Reto 1
function calculateAverage(numbers) {
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Same as: sum = sum + numbers[i];
    }
  
    return sum / numbers.length
  }


  // Objetos

  var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
    calculateAge: function(birthYear) {
		var today = new Date();
		var year = today.getFullYear();

		// return year - birthYear;
        this.age = year - this.birthYear
	}
}
// Agregar key y value a objeto
john["edad"] = [19];


console.log(john.firstName);
console.log(john['lastName']);
// console.log(john.calculateAge());
console.log(john)
john.calculateAge()
console.log(john)



// Cambiar valores
john.firstName = 'Jane';
console.log(john.firstName);