const clock = () => {
    let today = new Date();

        //getting hours, mins & sec
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        //12 hour format
        let when = ""
        if (hr==0){
            hr = 12;
        }
        else if(hr <= 12){
            when = "AM";
        }
        else {
            when = "PM";
        }

        let hh=hr; // for displaying time after 12pm 
        if (hr > 12){hh = hr - 12;}

        //Date
        const dd = today.getDate(); 
        const mm = today.getMonth();
        const yy = today.getFullYear();

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        //finalizing the time and date
        const date = months[mm] + " " + dd + ", " + yy ;
        const time  = hh + ":" + min + ":" + sec + " " + when;
        document.getElementById("date").innerHTML = date;
        document.getElementById("clock").innerHTML = time;
        //console.log(clock);
        //console.log(mm);
       //setTimeout(clock, 1000);
    }

window.addEventListener("load", () => {
    setInterval(function () {clock()}, 1000); 
});


//STOPWATCH
//let ms = document.getElementById('sw-ms');
//let sec = document.getElementById('sw-sec');
//let min = document.getElementById('sw-min');
//let sw_timer = 0;
//let timerInterval;

//let swstop = () =>{
//    clearInterval(timerInterval)
//}

//let swstart = () => {
//    stop();
//   timerInterval = setInterval(function() {
//        sw_timer += 1/60;
//        ms_val = Math.floor((sw_timer - Math.floor(sw_timer))*100);
//        sec_val = Math.floor((sw_timer) - Math.floor(sw_timer/60)*60);
//        min_val = Math.floor(sw_timer/60);
        
        //Giving values to HTML
//        ms.innerHTML = ms_val < 10 ? "0" + ms_val.toString() : ms_val;
//        sec.innerHTML = sec_val < 10 ? "0" + sec_val.toString() : sec_val;
//        min.innerHTML = min_val < 10 ? "0" + min_val.toString() : min_val;
//    }, 1000/60);
//}


// ====================================================================================
// STOPWATCH    
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timeon;


const reset = () => {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
   document.getElementById('sw-hr').innerText = '00';
   document.getElementById('sw-min').innerText = '00';
   document.getElementById('sw-sec').innerText = '00';
   document.getElementById('sw-ms').innerText = '000';   
   console.log("Reset() executed!");  
}


const start2 = () => {
    console.log("beginning the start function")
    pause();
    console.log("going to execute setTimeInterval()")
    timeon = setInterval(() => { timer(); }, 10);
    console.log("start function executed!");
}

const pause = () => {
    clearInterval(timeon);
    console.log("Pause/Stop function executed!");
}

const returnData = (input) => {
  return input >= 10 ? input : `0${input}`
}


const timer = () => {
    console.log("Entered Timer function")
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }


  console.log("timer function PARTIALLY done");
  document.getElementById('sw-hr').innerText = returnData(hour) + " h";
  document.getElementById('sw-min').innerText = returnData(minute) + " m";
  document.getElementById('sw-sec').innerText = returnData(second) + " s"; 
  document.getElementById('sw-ms').innerText = returnData(millisecond) + " ms";
  console.log("timer function executed!");
}

