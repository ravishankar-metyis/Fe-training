const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const country = document.getElementById('country');
const state = document.getElementById('state');
const address = document.getElementById('address');
const pincode = document.getElementById('pincode');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e=>{
   e.preventDefault();

   validateip();
});

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

const isValidEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateip = () => {
    const fnv = firstname.value.trim();
    const emailv = email.value.trim();
    const lnv= lastname.value.trim();
    const gv = gender.value.trim();
    const agev = age.value.trim();
    const countryv = country.value.trim();
    const statev = state.value.trim();
    const addressv = address.value.trim();
    const pinv= pincode.value.trim();
    const passwordv= password.value.trim();
    const password2v= password2.value.trim();

    //First Name
    if(fnv === ''){
        setError(firstname, 'First name is required');
    } 
    else {
        setSuccess(firstname);
    }

    //Last Name
    if(lnv === ''){
        setError(lastname, 'Last name is required');
    } 
    else {
        setSuccess(lastname);
    }
   
    //gender
    if(gv === ''){
        setError(gender, 'Gender is required');
    } 
    else {
        setSuccess(gender);
    }
    
    //age
    if(agev === ''){
        setError(age, 'Age is required');
    } 
    else {
        setSuccess(age);
    }
    
    //country
    if(countryv === ''){
        setError(country, 'Country is required');
    } 
    else {
        setSuccess(country);
    }

    //State
    if(statev === '' || 'select'){
        setError(state, 'State is required');
    } 
    else {
        setSuccess(state);
    }

    //Address
    if(addressv === ''){
        setError(address, 'Address is required');
    } 
    else {
        setSuccess(address);
    }
    
    //Pincode
    if(pinv === ''){
        setError(pincode, 'Pincode is required');
    } 
    else {
        setSuccess(firstname);
    }

    //Email
    if(emailv === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailv)) {
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }

    //Pass
    if(passwordv === '') {
        setError(password, 'Password is required');
    } else if (passwordv.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }
    
    //Re-type pass
    if(password2v === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2v !== passwordv) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}


