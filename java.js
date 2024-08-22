let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');


function displyTime(){
let date=new Date();

let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();

let hrtation=30*hh+mm/2;
let mrtation=6*mm;
let srtation=6*ss;

hr.style.transform=`rotate(${hrtation}deg)`;

min.style.transform=`rotate(${mrtation}deg)`;


sec.style.transform=`rotate(${srtation}deg)`;

}
setInterval(displyTime,1000)


