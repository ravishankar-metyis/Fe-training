//seperate functions
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

const isValidEmail = (emailv, emailRegex) => {
    let rez = emailRegex.match(emailv);
    return rez;
}

//First Name
const fnf = (tempId) =>{
    const firstnameid = tempId.id;
    const fnv= tempId.value.trim();
    if(fnv === ''){
        setError(firstnameid, 'First Name is required');
    }
    else if(fnv.match(firstnameid.pattern) == false) {
        setError(firstnameid, "First Name shouldn't be a number")
    } 
    else {
        setSuccess(firstnameid);
    }
}

    //Last Name
const lnf = (tempId) =>{
    const lastname = tempId;
    const lnv= lastname.value.trim();
    if(lnv === ''){
        setError(lastname, 'Last name is required');
    } 
    else {
        setSuccess(lastname);
    }
}

const gf = (tempId) =>{
    //gender
    const gender = tempId;
    const gv = gender.value.trim();
    if(gv == 'selectg'){
        setError(gender, 'Gender is required');
    } 
    else {
        setSuccess(gender);
    }
}

 const af = (tempId) =>{   
    //age

    const age = tempId;
    const agev = age.value.trim();
    if(agev === ''){
        setError(age, 'Age is required');
    } 
    else {
        setSuccess(age);
    }
 }

const cf = (tempId) =>{
    //country
    const country = tempId;
    const countryv = country.value.trim();
    if(countryv == 'select-country'){
        setError(country, 'Country is required');
    } 
    else {
        setSuccess(country);
    }
}

const sf = (tempId) =>{
    //State
    const statev = tempId.value.trim();
    const state = document.getElementById('state');
    if(statev == '' || statev == 'selects'){
        setError(state, 'State is required');
    } 
    else {
        setSuccess(state);
    }
}

const adf = (tempId) =>{
    //Address
    const address = tempId.trim();
    const addressv = address.value.trim();
    if(addressv === ''){
        setError(address, 'Address is required');
    } 
    else {
        setSuccess(address);
    }
}

const pinf = (tempId) =>{
    //Pincode
    const pincode =tempId.id;
    const pinRegex = tempId.pattern;
    const pinv= tempId.value.trim();
    let rez = pinv.match(pinRegex);
    if(pinv === ''){
        setError(pincode, 'Pincode is required');
    }
    else if (rez != true){
        setError(pincode, 'Pincode should be a number!')
    } 
    else {
        setSuccess(pincode);
    }
}

const emf = (tempId) =>{
    //Email
    const emailRegex = tempId.pattern;
    const email = tempId;
    const emailv = email.value.trim();
    if(emailv === '') {
        setError(email, 'Email is required');
    } else if (isValidEmail(emailv,emailRegex) != true) {
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }
}

const passf = (tempId) =>{
    //Pass
    const password =tempId;
    const passwordv= password.value.trim();
    const passRegex= password.pattern;
    let rez = passRegex.test(passwordv);
    if(passwordv === '') {
        setError(password, 'Password is required');
    } else if (passwordv.length < 8 && rez != true) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }
}

const repassf = (tempId) =>{
    //Re-type pass
    const password2 =tempId.trim();
    const password2v= password2.value.trim();
    if(password2v === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2v !== passwordv) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}

//=============================================================================================
const formInput = document.querySelectorAll('#form input');
const formSelect = document.querySelectorAll('#form select');

function validateInputField(inputDOM) {
    switch(inputDOM.id){
        case 'firstname' :  fnf(inputDOM); 
                            break;
        case 'lastname' : lnf(inputDOM);break;
        case 'email' : emf(inputDOM);break;
        case 'age' : af(inputDOM);break;
        case 'city' : validateip(inputDOM);break;
        case 'address' : adf(inputDOM);break;
        case 'pincode' : pinf(inputDOM);break;
        case 'password' : passf(inputDOM);break;
        case 'password2' : repassf(inputDOM);break; 
        default: return;  
}
}

function validateSelectField(inputDOM) {
   console.log(inputDOM.value);
   switch(inputDOM.id){
        case 'country' :  cf(inputDOM); break;
        case 'state' : sf(inputDOM);break; 
        default: return;  
}
}
for(i=0;i<formInput.length;i++) {
    formInput[i].addEventListener('keyup',(e) =>{
       console.log(e.target.pattern); 
        validateInputField(e.target);
    })
 formSelect[i].addEventListener('keyup',(e) =>{
       console.log(e); 
        validateSelectField(e.target);
    })
}


