const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisp = formControl.querySelector('.error');
  errorDisp.innerText = message;
  formControl.classList.add('error');
  formControl.classList.remove('success');
}

const setSuccess = (element) => {
  const formControl = element.parentElement;
  const errorDisp = formControl.querySelector('.error');
  errorDisp.innerText = '';
  formControl.classList.add('success');
  formControl.classList.remove('error');
}



function validateInputField(inputDOM) {
  let value = inputDOM.value;
  let pattern = inputDOM.pattern;
  //let parent =  inputDOM.parentElement;
  if (value == '') {
    setError(inputDOM, inputDOM.getAttribute('data-missing-error'));
    return true;
  }

  let regex = new RegExp(pattern, 'g');
  if (regex.test(value)) {
    setSuccess(inputDOM);
    return true;
  }
  //retype password check
  else if (inputDOM.id == 'password2' && value === document.getElementById('password').value) {
    console.log(regex.test(value));
    setSuccess(inputDOM);
    return true;
  }

  else {
    setError(inputDOM, inputDOM.getAttribute('parse-error-msg'));
    return false;
  }
}

function validateSelectField(inputDOM) {

  let value = inputDOM.value;
  let pattern = inputDOM.pattern;
  if (value == 'select') {
    setError(inputDOM, inputDOM.getAttribute('data-missing-error'));
    return true;
  }

  let regex = new RegExp(pattern, 'g');
  if (regex.test(value)) {
    setSuccess(inputDOM);
    return true;
  }
  else {
    setError(inputDOM, inputDOM.getAttribute('data-missing-error'));
    return false;
  }
}


const formInput = document.querySelectorAll('#form input');
const formSelect = document.querySelectorAll('#form select');

let formAttrState = 0; //counts the number of input fields that have been successfully validted



for (i = 0; i < formInput.length; i++) {
  const formControl = formInput[i].parentElement;
  formInput[i].addEventListener('keyup', (e) => {
    if (validateInputField(e.target)) {
      formControl.setAttribute('data-verified', 'true');
      console.log('Attribute set to true for ' + formControl);
    }
    else {
      formControl.removeAttribute('data-verified');
      console.log('Attribute removed for ' + formControl);
    }
  });
}


for (j = 0; j < formSelect.length; j++) {
  const formControl = formSelect[j].parentElement;
  formSelect[j].addEventListener('change', (e) => {
    console.log(e);
    if (validateSelectField(e.target)) {
      formControl.setAttribute('data-verified', 'true');
    }
    else {
      formControl.removeAttribute('data-verified');
    }
  });
}


const dispMsg = () => {

  for (i = 0; i < formInput.length; i++) {
    const formControl = formInput[i].parentElement;
    if (formControl.hasAttribute('data-verified')) {
      formAttrState++;
    }
    else {
      if (formAttrState != 0) {
        formAttrState--;
      }
    }
  }

  for (j = 0; j < formSelect.length; j++) {
    const formControl = formSelect[j].parentElement;
    if (formControl.hasAttribute('data-verified')) {
      formAttrState++;
    }
    else {
      if (formAttrState != 0) {
        formAttrState--;
      }
    }
  }
  console.log('formAttrState = ' + formAttrState);
  if (formAttrState == 12) {
    console.log("Entered Display function");
    //document.querySelector('.form-container').style.display = "block";
    document.querySelector('#form').style.display = "none";
    console.log("Executed ");
    document.querySelector('.form-container').style.textAlign = 'center';
    document.querySelector('.form-container').style.paddingTop = '60%'
    document.querySelector('.form-container').innerText = "Thank You for filling the form Correctly 😁";
  }

  else {
    window.alert("All fields haven't been filled correctly! Please see to it.");
  }
}
//====================================================================================
if(document.getElementById("submit")){
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  signup();
  dispMsg();
});
}

//====================================================================================
const updateLocalStorage = (x) => {
  localStorage.setItem('formData',JSON.stringify(x));
}
// Storing Data in LocalStorage
let formData = [];
//Get data from the browser local storage.
const getFromLocalStorage = () => {
  console.log("getFromLocalStorage started")
 // formData = localStorage.getItem('formData');
  formData = JSON.parse(localStorage.getItem('formData'));
  console.log(formData);
}
getFromLocalStorage();

const signup = () => {
  console.log("Length of formData is = " + formData.length);
   
  let user = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    age: document.getElementById('age').value,
    country: document.getElementById('country').value,
    state: document.getElementById('state').value,
    city: document.getElementById('city').value,
    address: document.getElementById('address').value,
    pincode: document.getElementById('pincode').value,
    password: document.getElementById('password').value
  } 
  formData.push(user);

updateLocalStorage(formData);
}

//================================================================================================================================
//Sign in
//let userDetails = []
var exports= {};
function signin() {
  for(i=0;i<formData.length;i++){

    //console.log(formData[i].email + "\n" +  document.getElementById('email').value + "\n\n" + formData[i].password + "\n" + document.getElementById('password').value) 
    if((formData[i].email == document.getElementById('email').value) && (formData[i].password == document.getElementById('password').value)){
     const userDetails = formData[i];
     exports.userDetails; console.log("user details exported")
     location.replace("../pages/dashboard.html");
     return
    }
    else {
      window.alert("The Credentials you have entered are incorrect. Please try again");
      return
    }
  }
}


document.getElementById("signin").addEventListener("click", function(event) {
  event.preventDefault();
  signin();
});
