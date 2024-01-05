let d = document.querySelector(".days");
let h = document.querySelector(".hours");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");





// 
var dest = new Date("jan 6, 2024 11:00:00").getTime();
// 
var x = setInterval(function(){
// 
// 
// 
var now = new Date().getTime();
// 
// 
var diff = dest - now;
// 
var days = Math.floor(diff/(1000*60 *60*24));
console.log(days);
// 
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60))
console.log(hours);
// 
var minutes = Math.floor((diff % (1000*60*60))/ (1000*60));
console.log(minutes);
// 
var seconds = Math.floor((diff %(1000*60))/1000);
console.log(seconds);
// 
// document.getElementById("demo").innerHTML = days + "Days " + hours + "hrs: " + minutes + ": " + seconds + "s";
// 

d.innerHTML = days;
d.style.fontSize = "90px";
d.style.padding = "2rem";



h.innerHTML = hours;
h.style.fontSize = "90px";
h.style.padding = "2rem";


m.innerHTML = minutes;
m.style.fontSize = "90px";
m.style.padding = "2rem";


s.innerHTML = seconds;
s.style.fontSize = "90px";
s.style.padding = "2rem";





// 
},1000);
// 
// 
// 
// 
// 
// 
// 1 day = 24hrs
// 
// 1hrs = 60min
// 
// 1min = 60sec
// 