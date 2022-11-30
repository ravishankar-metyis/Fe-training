//const data = require('./app.js');
//const userDetails = data.userDetails;


console.log("here ya go: "+ userDetails)

let nameDisplay = document.getElementById('dispname');
nameDisplay.innerText = `Hello! ${userDetails.firstname}`
console.log(nameDisplay.value)