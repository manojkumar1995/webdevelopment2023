const paragraps = {
    'one':'First Paragraph',  // key = value of i/p ; value is placeholder
    'two':'Second Paragraph',
}

// for (const key in paragraps) {
//     if (Object.hasOwnProperty.call(paragraps, key)) {
//         const element = paragraps[key];
//         console.log(element)
//         var para = document.createElement('p')  // empty para created
//         var node = document.createTextNode(element)
//         para.appendChild(node) // appending textnode to empty paragraph
//         let newElement = document.getElementById("second")
//         newElement.appendChild(para)
//     }
// }

// const inputField = document.getElementById('inputForm');
// for (const key in paragraps){
//     console.log(key);
//     inputField.value += key + " ";
//     inputField.setAttribute('placeholder', inputField.getAttribute('placeholder') + paragraps[key] + " ");

// }


const inputsObj = {
    'one':'First Input Feild',
    'two':'Second Input Feild',
    'three':'Third Input Feild',
    'four':'Fourth Input Feild'
}
console.log(Object.entries(inputsObj))

/*

for(const row of Object.entries(inputsObj)){ //row represents key,value of obj
    console.log(row[0]) // row[0] for keys ; row[1] for value 
    //here we are not destructuring the row so use index for key,value
}

*/
let input = document.createElement('input');
input.type="text"
input.className='main'
input.placeholder= "hello"
// console.log(input)
// elementDiv = document.getElementById('second')
// elementDiv.appendChild(input)


// dynamic inputs creation

for(const [key,value] of Object.entries(inputsObj)){
    let input = document.createElement('input');
    input.type="text"
    input.className='main'
    input.placeholder= value
    input.id = key
    if (value.length % 2 == 0) {
        console.log('even');
        input.style.backgroundColor = 'blue';
        input.style.color = 'red';
    }
    else{
        console.log('odd');
        input.style.backgroundColor = 'red';
    }
    input.style.fontSize = '20px'
    console.log(input)
    elementDiv = document.getElementById('second')
    elementDiv.appendChild(input)
}

// add bg-colors for above code with even-odd logic


