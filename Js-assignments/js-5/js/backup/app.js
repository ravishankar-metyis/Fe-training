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
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  signup();
  dispMsg();
});


//====================================================================================
// Storing Data in LocalStorage
let formData = [];
//Get data from the browser local storage.
const getFromLocalStorage = () => {
  console.log("getFromLocalStorage started")
  formData = localStorage.getItem('formData');
  //formData = JSON.parse(formData);
  //console.log(typeof (formData));
  console.log(formData);
}

const signup = () => {
  if (localStorage.length !== 0 || localStorage.length !== null ) {
    getFromLocalStorage(); //Loads data from storage to array
    console.log()
  }
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

//Hash map
/* 
  let user = new Map();
  user.set("firstname", document.getElementById('firstname').value)
  user.set("lastname", document.getElementById('lastname').value)
  user.set("email",document.getElementById('email').value)
  user.set("gender",document.getElementById('gender').value)
  user.set("age",document.getElementById('age').value)
  user.set("country",document.getElementById('country').value)
  user.set("state",document.getElementById('state').value)
  user.set("city",document.getElementById('city').value)
  user.set("address",document.getElementById('address').value)
  user.set("pincode",document.getElementById('pincode').value)
  user.set("password",document.getElementById('password').value)

  console.log(user) 

  formData.push(user);
  updateLocalStorage(user);
  console.log(formData);

*/
updateLocalStorage(formData);
}
const updateLocalStorage = (x) => {
  localStorage.setItem('formData',JSON.stringify(x));
}

/*
let formData2 = [];
let formData3 = [];
const sample = () => {
  getFromLocalStorage(formData);
  let user = {
    firstname: 'asfiashfua',
    lastname: 'sfjshfjsbfksb',
    email: 'nmsefiksfb@gmail.com',
    gender: 'Male',
    age: '67',
    country: 'India',
    state: 'Tamil Nadu',
    city: 'ajdghjavd',
    address: 'ftgikjdghdkghsjdhgh',
    pincode: '234567',
    password: 'adkjhsdfhjjkfjkabascbjh8'
  }

  let user2 = {
    firstname: 'drghdhhfua',
    lastname: 'sfjsfshfsjfsbfksb',
    email: 'efhhwejikflikgjkb@gmail.com',
    gender: 'Female',
    age: '69',
    country: 'India',
    state: 'Kerala',
    city: 'kljkdjkh',
    address: 'gijkghkdgjdgh',
    pincode: '234067',
    password: 'lkljkjlkjjjkjgjgkjljjjgjggjjljjj'
  }
  formData3 = [user];
  formData2 = [user2];
  let x = formData2.concat(formData3);  //formData.push(user); // appends to the formData array
  updateLocalStorage(x);
  console.log(x);
}

//for (i = 0; i < 3; i++) {
sample();
//}*/