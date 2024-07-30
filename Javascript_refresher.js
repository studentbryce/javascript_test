let name = "Bryce";                     // Strings
const birthYear = 1991;                 // Number
const age = 33;                         
var isStudent = true;                   // Boolean
let colours = ["red", "green", "blue"];  // Array of strings
let student = {                         // Object
    firstName: "Bryce",
    lastName: "Milbank"
    };

// display variables 
document.body.innerHTML += `<p>Name: ${name}</p>`;
document.body.innerHTML += `<p>Birth year: ${birthYear}}</p>`;
document.body.innerHTML += `<p>Age: ${age}</p>`;
document.body.innerHTML += `<p>Is a student: ${isStudent}</p>`;
document.body.innerHTML += `<p>Colours: ${colours.join(", ")}</p>`;
document.body.innerHTML += `<p>Person: ${student.firstName} ${student.lastName}</p>`;

function greet(name) {
    return `Hello, ${name}!`;
}

document.body.innerHTML += `<p>${greet('Bryce')}</p>`;