
// Note : Jars are like storage for storing data
// normal variable is like storing value/data inside a jar

// var applejar = "apple"
// var mangojar = "mango"
// var bananajar = "banana"

// mangojar = "strawberry"

// console.log(mangojar)


// array are like racks for storing jars or anything

var fruits = ['apple', 'mango','banana'];
var fruits1 = ["Dragon Fruit","Gavua"];
var fruits2 = ['grapes'];

console.log("fruits array start",fruits)
console.log(fruits[0]) // only postive index ranging from 1 to ....
console.log(fruits.length) // length of array returns number
console.log(fruits.slice(0,2)) // slice returns new array with slice version
console.log("Removes last element in array:", fruits.pop()) // it will directly change original array
console.log("Add new element in the last position :", fruits.push("strawberry","cherry")) // it will directly change original array
console.log(fruits.concat(fruits1).concat(fruits2)) // // it will not directly change original array instead of it will a new array
// console.log([...fruits,...fruits1,...fruits2]) // using spread operator
console.log("fruits array end",fruits)


var cars =new Array("Tesla") // using Array constructor
cars.push("Audi")
console.log(cars)

