// Time

/*
let currenttime = () => 
{
    let date = new Date
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let when = ""
    if (hr==0){
        hr = 12
    }
    else if(hr <= 12){
        when = "AM"
    }
    else {
        when = "PM"
    }

   document.getElementById("current").innerText = hr + " : " + min + " : " + sec + " " + when
    let t = setTimeout(function(){ currenttime() }, 1000)
}
currenttime();
*/
//Date
let getTime = () => {
    let date = new Date;
    let time = date.toLocaleTimeString();
    console.log('Time : ' + time); 
    //document.getElementById("date").innerText = dd + "  " + mm + " : " + yy 
    //console.log( dd + "  " + mm + " : " + yy)
document.getElementById("clock").innerText = `${time}`;
}

let getDate = () => {
    let date = new Date;
    let n = date.toDateString();
    console.log('Date : ' + n);
    document.getElementById("date").innerText = `${n}`;
}

//let t = setInterval(getTime,1000);

let t = setTimeout(getTime, 1000);

getDate();
// Stopwatch 
/* 
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let reset = document.getElementById('reset');

    let hour = 00;
    let minute = 00;
    let second = 00;

    start.addEventListener('click', function (){
        timer = true;
        stopwatch();
    });

    stop.addEventListener('click', function (){
        timer = false;
        stopwatch();
    })

    reset.addEventListener('click', function (){
        timer = false;
        hour = 00;
        minute = 00;
        second = 00;       
    })
*/

//stopwatch(){
//    if(timer == true){
//        count++;
//        if (count == 60)
//    }
    

//}

//Timer
//Timer() {
    
//}

//display function
//const display = () => {
//    document.getElementById("digital-clock").innerText = hr + " : " + min + " : " + sec + " " + when;
//}


