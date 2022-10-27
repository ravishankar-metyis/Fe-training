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


// Improved Function without eval
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
