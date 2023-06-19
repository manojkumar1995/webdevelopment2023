
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
console.log(fruits.concat(fruits1,fruits2))// it will not directly change original array instead of it will a new array
// console.log([...fruits,...fruits1,...fruits2]) // using spread operator
console.log("fruits array end",fruits)


var cars =new Array("Tesla") // using Array constructor
cars.push("Audi")
console.log(cars)

var bikes = ['TVS','HERO','BAJAJ']
console.log(bikes)

// O/p : ['ATHER', 'OLA', 'BAJAJ']

// bikes[0]= 'ATHER';
// bikes.pop(1,2)
// bikes.push('BAJAJ')
// bikes[1] = 'OLA'
// console.log(bikes)


console.log(bikes.splice(0,0)) // Returns deleted element and modifies original array
console.log(bikes.splice(0,1,'ATHER',100,'OLA'))// Return deleted element and modifies original array and add new elements before array

console.log(bikes)

// let bikesnew = {"bikes":bikes}

console.log(Array.isArray(bikes)) // Returns true if array type else returns false

let newbikes = bikes.toString();
console.log(newbikes,typeof newbikes) //O/p: "ATHER,100,OLA,HERO,BAJAJ"

let accnm= '123242323';
let startdate ='12-06-2023';
let enddate ='16-06-2023';
let format ='.pdf'

let uniquefilename = [accnm,startdate,enddate,format]
console.log(uniquefilename.toString().replace(',','_'))

let a = [1,2,3]
let b = [4,5]
let c = [6,7,8]
let d = [a, b, c]  // [[1,2,3], [4,5], [6,7,8]]
// [[1,2,3], [4,5], [6,7,8]]
console.log(d.toString())
d= d.flat()  // o/p: 1,3,4,5,6,7,8

console.log(d)
console.log(d[1])
delete d[1]
// d[1] = 100
console.log(d[1])
console.log(d)

if(d[1] === 2){
    console.log("YES")
}else{
    console.log("NO")
}






