// JSON -JavaScript Object Notation

obj = {
    'name':'John',
    'age':14,
}
console.log(obj,typeof obj)
console.log(obj.name,obj.age)

jsonobj = JSON.stringify(obj)  
// JSON.stringify() will convert default js object to stringified object
// Before submitting form data or sending request to backend we need to convert json
console.log(jsonobj,typeof jsonobj)  // o/p: '{"name":"John","age":14}' , string
console.log(jsonobj.name,jsonobj.age) //o/p: undefined undefine
console.log(jsonobj.slice(1,8))

// parsing Json data
// when we get data /response from any backend or server we need to parse the jsondata to native js object type
let parseddata = JSON.parse(jsonobj)
console.log(parseddata,typeof parseddata)

let arr = [1,2,3,4]
let jsonarr  = JSON.stringify(arr)
console.log(jsonarr,typeof jsonarr)

// parse
let parsedarr = JSON.parse(jsonarr)
console.log(parsedarr,typeof parsedarr)

