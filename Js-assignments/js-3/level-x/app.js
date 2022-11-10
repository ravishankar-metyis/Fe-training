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


const formInput = document.querySelectorAll('#form input');
const formSelect = document.querySelectorAll('#form select');

function validateInputField(inputDOM) {
    switch(inputDOM.id){
         case 'firstname' :  if(inputDOM.value != '' && isNaN(inputDOM.value) == true) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'First Name is required');
                            } 
                            break;
        case 'lastname' : if(inputDOM.value != '' && isNaN(inputDOM.value) == true) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Last Name is required');
                            } 
                            break;
        case 'email' : emf(inputDOM);break;
        case 'age' : if(inputDOM.value != '' && isNaN(inputDOM.value) == false) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Age should be a number!');
                            } 
                            break;
        case 'city' :if(inputDOM.value != '' && isNaN(inputDOM.value) == true) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'City is required');
                            } 
                            break;
        case 'address' : if(inputDOM.value != '' && isNaN(inputDOM.value) == true) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Address is required');
                            } 
                            break;
        case 'pincode' : 
                        if(inputDOM.value != '' && isNaN(inputDOM.value) == false) {
                            setSuccess(inputDOM);
                            }

                            else{
                            setError(inputDOM, 'Pincode is required to be a 6 digit number');
                            } 
                            break;

        case 'password' : if(inputDOM.value != '' && inputDOM.value.length >= 8) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Password is required');
                            } 
                            break;

        case 'password2' : if(inputDOM.value == document.getElementById('password').value) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Password must be same!');
                            } 
                            break;
 
        default: return;
    }
}

function validateSelectField(inputDOM) {
    switch(inputDOM.id){
         case 'country' :  if(inputDOM.value != 'select') {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Select a Country from the drop down menu');
                            } 
                            break;
        case 'state' : if(inputDOM.value != 'select') {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Select a State from the drop down menu');
                            } 
                            break;
        case 'gender' :if(inputDOM.value != 'select') {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Select a gender from the drop down menu');
                            } 
                            break;
                        }
                    } 
for(i=0;i<formInput.length;i++) {
    formInput[i].addEventListener('keyup',(e) =>{
       //console.log(e.target); 
        validateInputField(e.target);
    })}


for(j=0;j<formInput.length;j++) {
formselect[i].addeventlistener('click',(e) =>{
       console.log(e); 
        validateselectfield(e.target);
    })
}


