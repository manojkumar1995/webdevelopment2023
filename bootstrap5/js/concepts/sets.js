/*
const arr = [1,2,3]
const obj = {"name":"one","symobol":"1"}
console.log(typeof arr,typeof obj)  // o/p : object object
console.log( arr, obj) // o/p :  [1, 2, 3] ,{name: 'one', symobol: '1'}
*/

// finding object length:
// const obj = {"name":"one","symobol":"1"}
// console.log(Object.keys(obj).length)


const arr = [1,2,3,4,5,6,3,4,'5',false]
console.log(arr)
const numberSet =new Set(arr) // set removes all duplicate elements
//set doesn't maintain oder of sequence /insertion it will be in random order
console.log(numberSet)
// Remove duplicates in array use set and convert set to array by spread
// console.log([...numberSet])

numberSet.add(7)
numberSet.add({"fname":'John'})
numberSet.delete(3)
// console.log(numberSet.entries())
numberSet.forEach(element=>console.log(element))

numberSet.clear()

console.log(numberSet,numberSet.size) // o/p: Set(6) {1, 2, 3, 4, 5, …} ,6

let nameWeakSet = new WeakSet() //only works withs objects and add object other datatypes not allowed

let key1 = {id :1}
let key2 = {id :2}

let name1 = {fname: 'John',lname: 'Doe'}
let name2 = {fname: 'Jack',lname: 'Smith'}
let something = {one:'two'}

nameWeakSet.add(key1)
nameWeakSet.add(key2)
nameWeakSet.add(name1)
nameWeakSet.add(name2)

// nameWeakSet.add('5')// o/p: throws error since it is a weakSet it cannot handle other data type expect objs
nameWeakSet.add(something)
nameWeakSet.delete(something)
console.log(nameWeakSet)
