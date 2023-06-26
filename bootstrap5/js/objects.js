// General Object Structure in JS
// const objects = {
//     "key1":"value1",
//     "key2":"value3",
//     "key3":"value3",
// }
// creating object in js using method 1
var emplyObj = new Object();
console.log(emplyObj,typeof emplyObj)

emplyObj.name = "John"
emplyObj.age = 20;
emplyObj.salary = 125.5;
emplyObj.holidaysDays = ["Saturday","Sunday"];
emplyObj['isActive'] = true;
emplyObj["location"] = "USA";
console.log(emplyObj,typeof emplyObj)

// Accessing object in js 

console.log(emplyObj.holidaysDays[0])
console.log(emplyObj['isActive'])

// creating object in js using method 2
var vehicle = {
    "carmodel":"Tesla",
    "color":"blue",
    "car_mileage":600.5
}

console.log(vehicle, typeof vehicle)

// creating object in js using method 3
let officeObj = {}
officeObj["city"] = "Dallas"
officeObj.street = "xyz street"
officeObj.pincode = 103205

console.log(officeObj, typeof officeObj)


// complex object nested

emplyList = {
    "employee1":"{name : 'john',age:26}",
    "employee2":{name: "joe", age: 25, "city":"new jersy"},
    "employee3":{name: "steve", age: 25,'city': "new city" ,books :["harry potter","Moon stories"]},
    'employee4':{name: {"fname": "Jack","lname": "Smith"}},
    'employee5':{name: {"fname": "Harry","lname": "Smith"}}
}

console.log(emplyList)

// accessing complex object
console.log(emplyList.employee1, typeof emplyList.employee1)
console.log(emplyList["employee2"], typeof emplyList["employee2"])
console.log(emplyList['employee3']['books'][0], typeof emplyList['employee3'])
console.log(emplyList.employee4.name['fname'])
console.log(emplyList.employee5.name.fname)



// objects usage in real-time 


// API Usage

endpoint = "localhost:5000/employees&name='empoloyee1"
methods = ['GET','POST','DELETE','UPDATE', 'PATCH']


// object methods


let officeDetails = {
    'place':'Hyd',
    'getLocation': function (){ return 'Telangana'}
}

console.log(officeDetails.getLocation() ,typeof officeDetails.getLocation)





