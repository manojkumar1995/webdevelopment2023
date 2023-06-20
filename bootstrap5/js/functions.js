
// const c = a+b;
// const d = a-b;
// const e = a*b;
// const f = a/b;


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
function multiple(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}



const addNew = (a,b)=>{return a+b;}

// const addnew = (a,b)=>{ return a+b }

// console.log(add(5,4),sub(5,4), multiple(5,4),divide(5,4))
// console.log(add(3,2),sub(3,2), multiple(3,2),divide(3,2))
// console.log(addNew(9,9))

// 5 => 5*5 = 25 
// 6 => 6*6 = 36 
function square(a){ 
    return a*a
}

const square1 = a=>a*a

// console.log("square : ",square(35))
// console.log("square1 : ",square1(45))


for(let i=1;i<=10;i++){
    // console.log(`2 X ${i} = ${i*2}`)  // `` here `` are template string we can dynamic variables using ${}
}

function greet(message="How are you?",age=10){
    // console.log("Hi, "+message);

    // console.log("My age is, "+age);
}


greet("Good Morning!")
greet("Good Afternoon!")

// Function creation using Function Constructor
const sum = new Function("a","b","return a+b")

let result = sum(5,5)
// console.log(result)


function firstName(fname){
    return fname
}

function lastName(lname){
    return lname
}

let output1 = firstName("John");
console.log(output1)

let output2 = lastName("Doe");
console.log(output2)

// console.log(output1,output2)  // output : John Doe

function fullName(firstName,lastName){
    console.log(firstName,lastName)
    // console.log(firstName("Manoj"),lastName("Kumar"))
    return firstName("Manoj")+" "+lastName("Kumar")
}

const newfullName = fullName(firstName,lastName);
console.log(newfullName)

// fullName(function one(fname){ return fname },function two(lname){return lname})


const objects = {
    "key1":"value1",
    "key2":"value3",
    "key3":"value3",
}
