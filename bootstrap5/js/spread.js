arr1 = [1, 2, 3, 4];
arr2 = [5, 6 ,7, 8];


console.log(arr1.concat(arr2))
arr3 = [...arr1,...arr2]  // spread operator for combining array
console.log(arr3)

obj1 = {'fname': 'John'}
obj2 = {'lname': 'Doe'}
fullname = {...obj1 , ...obj2} // spread operator for combining objects
console.log(obj1)
console.log(obj2)
console.log(fullname)
// <============================= Next Line =======================>
numbers = [11,12,13,14,15,16,17,18,19]
// Accessing remaining elements using rest parameter ...rest

const [first,second, third, fourth, ...rest] =numbers  // Array Destructing with Rest parameter
// here rest can be any name

console.log(first,second, third, fourth )
console.log(rest)

employeeNameDetails = {
    'fname': 'Jack',
    'lname': 'Roy',
}
employeeAgeDetails = {
    'age': 29,
    'dob':'12-10-1990'
}

let emplyDetails = {...employeeNameDetails, ...employeeAgeDetails};

console.log(emplyDetails)

const employeeAddress = {
    'house_number':'1-2-345',
    'city':'New Jersy',
    'state': 'XYZ state',
    'country':'usa',
    'currency':'$'
}


// let hNo = employeeAddress.house_number;
// let cty = employeeAddress.city;
// let ste = employeeAddress.state;
// console.log(hNo,city, ste) // o/p : 1-2-345 New Jersy XYZ state

// Object Destructing with keys only with a valid key,no indexes allowed

const {house_number, city, state} = employeeAddress
console.log(house_number, city, state) // o/p : 1-2-345 New Jersy XYZ state

console.log(city)

delete employeeAddress.house_number // delete particular key using delete

employeeAddress.houseNumber = "2-3-456" // Adding new key,values into existing obj

console.log(employeeAddress)

Object.keys(employeeAddress)
// console.log(Object.keys(employeeAddress)) // print all keys in new a array
// console.log(Object.values(employeeAddress)) // print all Values in new a array

// print all keys in new Line use index 0 for keys and 1 for values
for(let i=0;i<=Object.keys(employeeAddress).length;i++){

    // console.log(Object.entries(employeeAddreess)[i][0])
    // using condition to skip undefined 
    if(i === 4){
        break
    }
}
console.log("<====================new===============>")
// using for in loop through the object and get keys one-one
for (let key in employeeAddress){
    console.log(key,":",employeeAddress[key])
}



