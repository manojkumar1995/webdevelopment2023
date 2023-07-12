const firsth1 = document.querySelector('.main #h1') // o/p : single first element in dom
// const firsth1 = document.getElementsByClassName('h1')  // o/p :HTMLCollection
// const firsth1 = document.getElementsByTagName('h1') // o/p :HTMLCollection
// const firsth1 = document.getElementsByTagNameNS('h1',3) // o/p :NodeList

firsth1.style.color= 'indigo'
// console.log(firsth1)


const allselected = document.querySelectorAll('h2')
// console.log(allselected)

let newselectAll = Array.from(allselected)

// console.log(newselectAll)

newselectAll.forEach(function(element,index){
    index+=1
    console.log(index,element)
    var value = element.innerHTML;
    // console.log(value)
    element.innerHTML = value.toUpperCase()+`${index}`
    element.style.color = 'red';
    element.style.backgroundColor = 'black';
    element.style.padding = '10px';
    element.style.borderRadius = '8px';
    if(index % 2 ==0 ){
        element.style.color = 'pink';
        element.style.backgroundColor = 'yellow';
        // console.log(index);
    }else{
        element.style.color = 'blue';
        element.style.backgroundColor = 'grey';
        // console.log(index);
    }
})