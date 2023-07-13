const parent = document.querySelector('.parent')

console.log(parent)

var childrens = parent.children;

var childrens = Array.from(childrens)
console.log(childrens)
childrens.forEach((element,index)=>{
    index+=1
    // console.log(element.innerText);
    if(index == 2){
        let value = element.innerText.toUpperCase();
        element.innerText = value
        element.style.color = 'red';
    }
});

console.log()
childrens[1].nextElementSibling.style.color = 'blue'
childrens[1].previousElementSibling.style.color = 'orange'
// console.log(childrens[0].nextElementSibling.nextElementSibling)
childrens[0].nextElementSibling.nextElementSibling.nextElementSibling.style.color = 'green'
console.log(childrens[0].parentElement)
childrens[0].parentElement.style.border = 'grey 1px solid'

// using htmlcollection with regular forloop
var childrensNew = parent.children;
console.log(childrensNew)

for(i=0;i <= childrensNew.length-1;i++){
    console.log(childrensNew[i].innerText)
}


