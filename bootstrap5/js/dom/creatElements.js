const paragraps = {
    'one':'First Paragraph',  // key = value of i/p ; value is placeholder
    'two':'Second Paragraph',
}

for (const key in paragraps) {
    if (Object.hasOwnProperty.call(paragraps, key)) {
        const element = paragraps[key];
        console.log(element)
        var para = document.createElement('p')  // empty para created
        var node = document.createTextNode(element)
        para.appendChild(node) // appending textnode to empty paragraph
        let newElement = document.getElementById("second")
        newElement.appendChild(para)
    }
}