var parent = document.querySelector('.parent')
console.log(parent,typeof parent)

const element = document.createElement("p")
const elemenClass = document.createAttribute("para")
let node = document.createTextNode('Child Five')
var newElement = element.appendChild(node)
const element1 = document.createElement("p")
let node1 = document.createTextNode('Child Six')
var newElement1 = element.appendChild(node1)
var br = document.createElement('br');
var hr = document.createElement('hr');

const element2 = document.createElement("p")
let node2 = document.createTextNode('Child SEVEN')
// element.insertBefore(node2,element2)

document.getElementById('parent').appendChild(newElement)
document.getElementById('parent').appendChild(hr)
document.getElementById('parent').appendChild(newElement1)
// document.getElementById('parent').appendChild(<h1>
//     Hello, !
//   </h1>)
// document.getElementById('parent').appendChild(newElement3)
// element2.insertBefore()



console.log({element,node,newElement})