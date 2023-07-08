// if else statements

/* syntax :  

Single IF-Else Statements
if(condition){
    if block body
}
else{
    else block body
}

Mutliple IF-Else-IF Statements

if(condition1){
    if block body1
}
else if(condition2){
    if block body2
}
else{
    else block body1
}.....

* If condition is true if block executes
* If condition is false goes preceeding else block or next statments
* never use else seperately withhout if statement

*/

// let age = Number(prompt("Enter your age in numbers"))
let age = 2
let switchcdnt;
if(age > 18){
    // console.log("eligible for voting")
    switchcdnt ="A"
}else if(age === 18){
    // console.log("You eligible for voting, please register if not")
    switchcdnt ="B"
}else if(age < 15 || age < 10){
    // console.log("You have no rights to vote")
    switchcdnt ="C"
}else{
    // console.log("Not eligible for voting")
    switchcdnt ="D"
}

switchcdnt ="C"
console.log(switchcdnt)
switch(switchcdnt){
    case ("A"):
        console.log("eligible for voting")
        break;
    case ("B"):
        console.log("You eligible for voting, please register if not")
        break;
    case ("C"):
        console.log("You have no rights to vote")
        
    case ("D"):
        console.log("Not eligible for voting")
        break;
    default:
        console.log("Something went wrong ,please check ur input")
}
console.log("End of Switch")