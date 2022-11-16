const formInput = document.querySelectorAll('#form input');
const formSelect = document.querySelectorAll('#form select');

function validateInputField(inputDOM) {
   console.log(inputDOM.value);

   //regex of each field
   nameRegex = /^[a-zA-Z ]+$/;
   emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
   pinRegex= /^[1-9][0-9]{5}$/;
   addressregex= /[A-Za-z0-9'\.\-\s\,]/;
   passRegex= /(?=.{8,})/ ;

    switch(inputDOM.id){
        case 'firstname' :  if(nameRegex.match(inputDOM.value) == false)
                                {console.log("Unsuccessful"); 
                                document.getElementsByClassName('error').innerHTML(`Please Enter a Valid ${inputDOM.name}`);}
                            break;
        case 'lastname' : nameRegex.test(inputDOM.value);;break;
        case 'email' : emailRegex.test(inputDOM.value); 
                       break;
        case 'age' : if(isNaN(inputDOM.value) != true){console.log("Age validation unsuccessful")} else if (isNaN(parseInt(inputDOM.value))){console.log("Age has been validated successfully")} else {return;};break;
        case 'city' : validateip(inputDOM.id);break;
        case 'address' : adf(inputDOM.id);break;
        case 'pincode' : pinf(inputDOM.id);break;
        case 'password' : passf(inputDOM.id);break;
        case 'password2' : repassf(inputDOM.id);break; 
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


/*    switch(inputDOM.id){
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
        case 'email' : if(inputDOM.value.match(inputDOM.pattern) == true || inputDOM.value.length > 6) {
                            setSuccess(inputDOM);
                            }
                            else{
                            setError(inputDOM, 'Please enter your E-mail address');
                            } 
                            break;
                    
 
        default: return;
    }


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
    
    */