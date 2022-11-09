const form = document.getElementById('form');

//Validating the form on clicking the submit button
/*form.addEventListener('click', e=>{
   e.preventDefault();

   validateip();
}); */

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

const isValidEmail = (emailv) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //const re = /\S+@\S+\.\S+/;
    //const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //return re.test(String(email).toLowerCase());
    return emailv.match(re);
}

//First Name
const fnf = () =>{    
    const firstname = document.getElementById('firstname');
    const fnv = firstname.value.trim();
    if(fnv === ''){
        setError(firstname, 'First name is required');
    } 
    else {
        setSuccess(firstname);
    }
}

    //Last Name
const lnf = () =>{
    const lastname = document.getElementById('lastname');
    const lnv= lastname.value.trim();
    if(lnv === ''){
        setError(lastname, 'Last name is required');
    } 
    else {
        setSuccess(lastname);
    }
}

const gf = () =>{
    //gender
    const gender = document.getElementById('gender');
    const gv = gender.value.trim();
    if(gv == 'selectg'){
        setError(gender, 'Gender is required');
    } 
    else {
        setSuccess(gender);
    }
}


 const af = () =>{   
    //age
    const age = document.getElementById('age');
    const agev = age.value.trim();
    if(agev === ''){
        setError(age, 'Age is required');
    } 
    else {
        setSuccess(age);
    }
 }

const cf = () =>{
    //country
    const country = document.getElementById('country');
    const countryv = country.value.trim();
    if(countryv == 'select-country'){
        setError(country, 'Country is required');
    } 
    else {
        setSuccess(country);
    }
}

const sf = () =>{
    //State
    const statev = state.value.trim();
    const state = document.getElementById('state');
    if(statev == '' || statev == 'selects'){
        setError(state, 'State is required');
    } 
    else {
        setSuccess(state);
    }
}

const adf = () =>{
    //Address
    const address = document.getElementById('address');
    const addressv = address.value.trim();
    if(addressv === ''){
        setError(address, 'Address is required');
    } 
    else {
        setSuccess(address);
    }
}

const pinf = () =>{
    //Pincode
    const pincode = document.getElementById('pincode');
    const pinv= pincode.value.trim();
    if(pinv === ''){
        setError(pincode, 'Pincode is required');
    }
    else if (isNaN(pinv)){
        setError(pincode, 'Pincode should be a number!')
    } 
    else {
        setSuccess(pincode);
    }
}

const emf = () =>{
    //Email
    const email = document.getElementById('email');
    const emailv = email.value.trim();
    if(emailv === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailv)) {
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }
}

const passf = () =>{
    //Pass
    const password = document.getElementById('password');
    const passwordv= password.value.trim();
    if(passwordv === '') {
        setError(password, 'Password is required');
    } else if (passwordv.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }
}

const repassf = () =>{
    //Re-type pass
    const password2 = document.getElementById('password2');
    const password2v= password2.value.trim();
    if(password2v === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2v !== passwordv) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}

const validateip = () => {

    fnf();
    lnf();
    af();
    gf();
    adf();
    emf();
    sf();
    cf();
    pinf();
    passf();
    repassf();
    
}


let x = document.getElementsByTagName("input") ;
let y = document.getElementsByTagName("select");
/*for(i=0;i<x;i++) {
    x[i].addEventListener('click', e=>{
        e.preventDefault();

         validateip();
        });
    }
   for(i=0;i<y;i++){
    y[i].addEventListener('clcik', e=>{
        e.preventDefault();

         validateip();
        });
*/

//const ids = ['firstname','lastname','email','gender','age','country','state','city','address','pincode','password','password2'];
for(i=0;i<x;i++) {
    x[i].addEventListener('focusin',() =>{
        switch(x[i].id){
           case 'firstname' : fnf();break;
           case 'lastname' : lnf();break;
           case 'email' : fnf();break;
           case 'age' : af();break;
           case 'city' : validateip();break;
           case 'address' : adf();break;
           case 'pincode' : pinf();break;
           case 'password' : passf();break;
           case 'password2' : repassf();break; 
           default: return();
        }
    
    })
    }

for(i=0;i<y;i++) {
    y[i].addEventListener('click',() =>{
        switch(y[i].id){
           case 'gender' : gf();break;
           case 'country' : cf();break;
           case 'state' : sf();break;
           default: return();
        }
    
    })
    }

