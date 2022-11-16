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
    let value = inputDOM.value;
    let pattern = inputDOM.pattern;
   //let parent =  inputDOM.parentElement;
    if(value == '') {
        return setError(inputDOM, inputDOM.getAttribute('data-missing-error'));
    }

    let regex= new RegExp(pattern,'g');
    if(regex.test(value)){
    return  setSuccess(inputDOM);
   }
      //retype password check
   else if(inputDOM.id == 'password2' && value === document.getElementById('password').value){
    console.log(regex.test(value));
    return setSuccess(inputDOM);
   }
 
    else {
    return setError(inputDOM,inputDOM.getAttribute('parse-error-msg'));
   }

  
   
   /*console.log(value)
   console.log(pattern)
   console.log(parent)
*/

}

function validateSelectField(inputDOM) {
    
    let value = inputDOM.value;
    let pattern = inputDOM.pattern;
    if(value == 'select') {
        return setError(inputDOM, inputDOM.getAttribute('data-missing-error'));
    }

    let regex= new RegExp(pattern,'g');
    if(regex.test(value)){
    setSuccess(inputDOM);
   }
   else {
    setError(inputDOM,inputDOM.getAttribute('data-missing-error'));
   }
    } 
                
for(i=0;i<formInput.length;i++) {
    formInput[i].addEventListener('keyup',(e) =>{
       //console.log(e.target); 
        validateInputField(e.target);
    })}


    console.log(formSelect)
for(j=0;j<formSelect.length;j++) {
formSelect[j].addEventListener('change',(e) =>{
       console.log(e); 
        validateSelectField(e.target);
    })
}




const dispMsg = () =>{
    //e.preventDefault();
    console.log("Entered function")
    document.querySelector('.form-container').style.display = "none";
    console.log("Executed ");
    document.querySelector('.form-container').innerText = "Thank You for filling the form Correctly 😁 ";
}

const checker = () =>{
    let formStateList = document.getElementsByClassName('success');
    console.log('Successfull form fields = ' + formStateList.length);
    let buttState =  document.getElementById("submit").disabled;
    if(formStateList.length == 12){
        buttState=true;
      }
    else{
        buttState=false;
    }
    console.log(`Button active state has been toggled to ${buttState}`);
  }
//setInterval(checker,1000);

//const submitForm = () =>{

//}