let a=5;

function anyFunction(x){
    // console.log(x)
}
anyFunction(this) // here this represent entire window object

/*
anyFunction1 = (this)=>{console.log(this)} // throws error ,this donot represent present function or window object better to avoid this in arrow function
anyFunction1()
*/
class AnyClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    incremenAge(age){
        age+=1
        console.log(age)
    }
    
}

let anyclss = new AnyClass("John",23)
console.log(anyclss,anyclss.incremenAge(23),typeof anyclss)
let anyclss1 = new AnyClass("Smith",24)
console.log(anyclss1,anyclss1.incremenAge(24),typeof anyclss1)
// 








