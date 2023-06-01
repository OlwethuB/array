// let name = document.getElementsById("fname");
// let surname = document.getElementsById("lname");
// let age = document.getElementsById("age");
// let job = document.getElementsById("job");


// function display_data() {
//     let person = ['name','surname','age','job'].values;
// person.push()
// console.log(person)
// person = document.getElementById("").innerHTML;
// }

// let name = document.getElementById("name");
// let sur = document.getElementById("sur");
// let age = document.getElementById("age");

const listOfValues = [];

function addValue(){
    let myValue = document.getElementById("numberInput").value
    listOfValues.push(myValue)
    console.log(listOfValues)
    
    myValue = document.getElementById("dis").innerHTML = listOfValues;
};

