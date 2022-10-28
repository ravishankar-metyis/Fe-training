//=============================================================================================================
// NEWER APPROACH
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextelement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextelement = currentOperandTextelement
    }
}


clear() {
 this.previousOperand = ''
 this.currentOperand = ''
 this.operation = undefined
}

del() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
}
   
appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
        this.result()
    }
    this.operation = operation;
    this.PreviousOperand = this.currentOperand;
    this.currentOperand = ''
}

// Result calculation Function
    result() {
        let computation ;
        const prev =  parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-': 
                computation = prev - current
                break
            case '*': 
                computation = prev * current
                break
            case '/': 
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined 
        this.previousOperand = ''
    }
 
getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimaldigits = stringNumber.split('.')[1]
    const floatnum = parseFloat(number)
    let IntegerDisplay
    if(isNaN(IntegerDisplay)){
        IntegerDisplay = ''
    }
    else {
        IntegerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0})
    }
    if (decimaldigits != null) {
        return '$(IntegerDisplay).$(decimaldigits)' 
    } 
    else {
        return IntegerDisplay
    }
    //if(isNaN(floatnum)) return '';
    //return number.toLocaleString('en'); //for commas appearing in numbers
}

updateDisplay() {
    this.currentOperandTextelement.innerText = this.getDisplayNumber(this.currentOperand)
    if(this.operation != null){
        this.previousOperandTextElement.innerText = '$(this.previousOperand) $(this.operation)'
    }
    else {
        this.previousOperandTextElement.innerText = ''
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const clearButton = document.querySelectorAll('[data-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-prevous-operand]')
const currentOperandTextelement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextelement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

clearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay()
    })

deleteButton.addEventListener('click', () => {
        calculator.del();
        calculator.updateDisplay()
    })
    
equalsButton.addEventListener('click', () => {
        calculator.result();
        calculator.updateDisplay()
    })