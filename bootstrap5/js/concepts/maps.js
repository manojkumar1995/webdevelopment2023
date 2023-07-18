
var obj = [['fname','John'],['lname','Smith'],[6,1]] // mutiple insetion of element to map
let employeMap = new Map(obj)
employeMap.set('age',23) // single insertion

employeMap.delete('fname')  // deletes key and value of map
console.log(employeMap,employeMap.size)

employeMap.forEach((value,key)=>console.log(key,value))


// Weakmap
let empcarWeakMap = new WeakMap()

let empid = {id:40125}
let car = {name:'Toyota',color:'red',model:'xyz'}

let carobj = {'carage':3}
let carservice = {'service':"A1 service"}
empcarWeakMap.set(empid,car)
empcarWeakMap.set(carobj,carservice)


console.log(empcarWeakMap)
