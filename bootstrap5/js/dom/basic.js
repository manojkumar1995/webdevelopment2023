// var h1 = document.getElementById('h1').id="Hello"
var h1 = document.getElementById('h1')
console.log(h1)
var h1class = document.getElementsByClassName('h1')[1].innerHTML="Hi"
console.log(h1class[0],h1class[1])
var h2element = document.getElementsByTagName('h2')
console.log(h2element[0],h2element[1])

h1.innerHTML= "Welcome Home";
h1.id = "H1"
h1.style.color = 'red';
h1.style.background = 'grey';
h1.setAttribute('class','h1')
h1.setAttribute('class','H1Class')


var second = document.getElementById("second")



for(i=0;i<=4;i++){

    var paragraph = document.createElement("p")
    var br = document.createElement('br')
    console.log(paragraph)
    paragraph.innerText= `New text${i+1} added from Dom`
    second.appendChild(paragraph)
    paragraph.style.color ="blue"
    paragraph.style.fontSize= "32px"
    paragraph.style.fontWeight= "bold"
    second.style.background = 'grey'
    paragraph.setAttribute('id',`paragraph${i+1}`)
    

}