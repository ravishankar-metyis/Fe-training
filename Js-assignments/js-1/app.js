/* CALCULATOR */

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("big-result").value += value;
}

// Calculator using eval(), very unsafe to use
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}


// Improved Function without eval -> takes an input (eg. 1+4-3/5)
let calc2 = () => {
    console.clear();
    let thing = document.getElementById("result").value; console.log("Value of thing: " + thing);
    let rez=0;
    console.log("Value of Rez initially is: " + rez);
    
    //splitting the numbers using the operators
    thing = thing.split(/([-+*\/])/); console.log("The split array is: " + thing);
    console.log("Length of the expression is =>" + thing.length); 
    for(let i =0; i < thing.length ; i++) {
        console.log("Entered For loop");
        if (isNaN(thing[i]) == true) {

            let nextnum = thing[i+1]
            switch(thing[i]){
                case '+': 
                    rez = parseFloat(rez) + parseFloat(nextnum);
                    console.log("Performed operation " + thing[i] + " intermediate result => " + rez);
                    i++;
                    break;
                case '-':
                    rez = parseFloat(rez) - parseFloat(nextnum);
                    console.log("Performed operation " + thing[i] + " intermediate result => " + rez);
                    i++;
                    break;
                case '*':
                    rez = parseFloat(rez) * parseFloat(nextnum);
                    console.log("Performed operation " + thing[i] + " intermediate result => " + rez);
                    i++;
                    break;
                case '/':
                    rez = parseFloat(rez) / parseFloat(nextnum);
                    console.log("Performed operation " + thing[i] + " intermediate result => " + rez);
                    i++;
                    break;
            }
        }

        else {
            rez += parseFloat(thing[i]);
        }
    }
    console.log("Out of Loop!");
    console.log("the Final result is = " + rez);
    document.getElementById("result").value = rez;
    document.getElementById("big-result").value = rez;
}
//=============================================================================================================
// NEWER APPROACH
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextelement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextelement = currentOperandTextelement;
    }
}

clear(){
 this.previousOperand = '';
 this.currentOperand = '';
 this.operation = undefined;
}

delete(){
   return 0; 
}
// Newer Function
    result() {
        let computation ;
        const prev =  parseFloat(this.previousOperand);
        const cuurrent = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(cuurrent)) return
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-': 
                computation = prev - current;
                break;
            case '*': 
                computation = prev * current;
                break;
            case '/': 
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined ;
        this.previousOperand = ''
    }
    
appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

chooseOperation(operation){
    if(this.currentOperand === '') return;
    if(this.previousOperand !== ''){
        this.result();
    }
    this.operation = operation;
    this.PreviousOperand = this.currentOperand;
    this.currentOperand = '';
}

updateDisplay(){
    this.currentOperandTextelement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
}

const numberButtons = documents.querySelectorAll('[data-number]');
const operationButtons = documents.querySelectorAll('[data-operation]');
const equalsButton = documents.querySelectorAll('[data-equals]');
const deleteButton = documents.querySelectorAll('[data-delete]');
const clearButton = documents.querySelectorAll('[data-clear]');
const previousOperandTextElement = documents.querySelectorAll('[data-prevous-operand]');
const currentOperandTextelement = documents.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextelement);
numberButtons.forEach(button => {
    button.addEventListner('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
});