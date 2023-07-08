var arr1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i=0;i < arr1.length ; i++){
    console.log(arr1[i])
    // if(i == 2){
    //     break;
    // }
    // if(i == 3){
    //     continue;
    // }
    
}

console.log("End of for loop1")

// for of starts from index 0 
// use for both array and objects
for(index in arr1){
    console.log(arr1[index])
}
console.log("End of for loop2")


// for of starts from index 1 
// recommends for objects
for(index of arr1){
    console.log(arr1[index])
}

