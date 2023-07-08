let alphabets = ['A','B','C']
console.log(alphabets.shift()) // Returns shited value and removes it from original Array
console.log(alphabets)

let alphabets1 = ['E','F','G']
console.log(alphabets1.unshift('H')) // // Adds new defined value at  starting of  original Array 
console.log(alphabets1)

alphabets1.forEach((element,index)=>{
    console.log(index,element)
})

// let fruits = ['Apple', 'Banana', 'orange', 'Mango']
// let fruits = []
// let fruits = new Array()

let fruits = Array.of();  // 
fruits[0] ="orange",
fruits[1] ="Banana"
fruits[2] = "Apple"
fruits[3] ="Mango"
console.log(fruits ,typeof fruits)

console.log(fruits.includes('Orange')) // returns boolean true if passed argument i,e element exists in array or not

console.log(fruits.indexOf('orange')) // returns index position of passed argument element

console.log(fruits[2])


let numbers = [4,2,8,1,5,3,9,7,['A',"B"]]
console.log(typeof numbers)
numbers = numbers.flat()

console.log(typeof numbers,numbers) // "4,2,8,1,5,3,9,7"

console.log(numbers.sort())
console.log(numbers.reverse())
// console.log(fruits.sort())
// console.log(fruits.reverse())

console.log(fruits.entries())
let entries  = fruits.entries()

/*
for(let i = 0 ;i<= fruits.length-1 ; i++){
    // General for loop for iterate an aray
    console.log(fruits[i])
}

*/
for(let value of entries){
    console.log(value[1]);
}

let myName = ["Manoj","Kumar"]

console.log(myName.join("_"))
console.log(fruits.join(","))






