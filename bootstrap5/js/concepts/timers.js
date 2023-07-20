var count = 0
let value  = setInterval(function(){
    count+=1
    console.log(count)
    // console.log(apioutput)
    if(count === 7){
        clearInterval(value)
    }
},1000);


function greet(){
    console.log(" hello John")
}

console.log("1");
// greet()
id = setTimeout(greet,3000)
// clearTimeout(id)
console.log("3");