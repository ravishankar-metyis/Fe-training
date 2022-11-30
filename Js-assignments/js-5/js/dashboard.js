//const data = require('./app.js');
//const userDetails = data.userDetails;

let formData = [];
//Get data from the browser local storage.
const getFromLocalStorage = () => {
  console.log("getFromLocalStorage started")
 // formData = localStorage.getItem('formData');
  formData = JSON.parse(localStorage.getItem('formData'));
  console.log(formData);
}
getFromLocalStorage();

  for(i=0;i<formData.length;i++){

    if((formData[i].email == document.getElementById('email').value) && (formData[i].password == document.getElementById('password').value)){
     const userDetails = formData[i];
     location.replace("../pages/dashboard.html");

     return
    }
    else {
      window.alert("The Credentials you have entered are incorrect. Please try again");
      return
    }
  }

function dashboard(userDetails) {
console.log("here ya go: "+ userDetails)

let nameDisplay = document.getElementById('dispname');
let fnameDisp = document.getElementById('fnameDisp'); 
let lnameDisp = document.getElementById('lnameDisp'); 
let emailDisp = document.getElementById('emailDisp'); 
let ageDisp = document.getElementById('ageDisp'); 
let genderDisp = document.getElementById('genderDisp'); 
let addressDisp = document.getElementById('addressDisp'); 
let pincodeDisp = document.getElementById('pincodeDisp'); 
let cityDisp = document.getElementById('cityDisp'); 
let stateDisp = document.getElementById('stateDisp'); 
let countryDisp = document.getElementById('countryDisp');
let passDisp = document.getElementById('passwordDisp');

nameDisplay.innerText = `Hello! ${userDetails.firstname} ${userDetails.lastname}`
fnameDisp.innerText = `Hello! ${userDetails.firstname}`
lnameDisp.innerText = `Hello! ${userDetails.lastname}`
emailDisp.innerText = `Hello! ${userDetails.email}`
ageDisp.innerText = `Hello! ${userDetails.age}`
genderDisp.innerText = `Hello! ${userDetails.gender}`
addressDisp.innerText = `Hello! ${userDetails.address}`
pincodeDisp.innerText = `Hello! ${userDetails.pincode}`
cityDisp.innerText = `Hello! ${userDetails.city}`
countryDisp.innerText = `Hello! ${userDetails.country}`
passDisp.innerText = `Hello! ${userDetails.password}`
}