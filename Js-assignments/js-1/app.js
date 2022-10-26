/* CALCULATOR */
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}



var p = document.getElementById("result").value;
const res = (p = '') => {
        let total = 0;
        str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
        while (str.length) {
        total += parseFloat(str.shift());
    };
   return total;
};
sheesh = res(p);
document.getElementById("result").value = sheesh;
