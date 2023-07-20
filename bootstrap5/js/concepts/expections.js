// let a = 6;
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
try{
    // throw new Error('The number is low'); // we can throw error from try ,catch ,finally
    console.log(a);

    // console.log("6")
    
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    // throw new Error("sss")
}
finally{
    // console.log(a); 
    // throw new Error("a") // throw will override the catch error
}
console.log("7")
console.log("8")