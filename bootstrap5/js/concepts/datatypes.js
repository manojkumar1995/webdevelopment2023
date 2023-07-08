//Numbers
let x = 5;
let y = 15.546464;
// y =y.toFixed(2);
z = BigInt(11111111111111111111111111111111111111111111111111111111111111111111)
z1 = BigInt(2222222222222222222222222222222222222222222222222222222222222222222)
console.log(z+z1,typeof (z+z1))

let exponential = 50e4;
let decexponential = 50e-8; // 500000 ,5Xe5  =  0.00005  5Xe-4
console.log(exponential, typeof exponential)
console.log(decexponential, typeof decexponential)

console.log(x, typeof x)
console.log(x+y,y-x,x*y,(y/x).toFixed(2))

//Number Methods
console.log((y/x).toFixed(2),(y/x).toExponential(2),(y/x).toPrecision(3),(y/x).toLocaleString())

// 12.5 12.55 12.5555

let a = "1";
let b = 2;
console.log("Output String with concatination : ",a+b , typeof (a+b))
console.log("Output Number : ",Number(a)+b,typeof (Number(a)+b))
console.log("Output String : ",a+String(b),typeof (a+String(b)))
emptystring = ''
// emptystring ="iiiiii"
console.log("Output :::",emptystring,typeof emptystring)

// console.log("1"+String(2))  : "12"

// Strings

let c = "MANOJ ";
let d = "KUMAR";
console.log((c+d),(c+d).length) //Concating the two strings
let clen = (c+d).length
if(clen >= 5){
    c = c.slice(0,5)+"....."
    console.log("New Name :-", c)
}

// Boolean
// True Type : true --------> 1
// False Type : false --------> 0

let t = true;
let f = false;
console.log("True :",t, typeof t)
console.log("False :",f, typeof f)
// Not ! opertor
console.log("Not True :",!t, typeof !t)
console.log("Not False :",!f, typeof !f)

console.log(t+f, t-f , f-t , t*f, f*t ,t/f, f/t)


// udefined

let u = undefined;
let n = null
console.log(!u, !n, !emptystring); // true, true, true


let obj = {
    "inr":"₹",
    "term":"Rupee"
}
// Symbols
const inr = Symbol(obj);
const dollar = Symbol("$");
console.log(inr.description, typeof inr, dollar)

