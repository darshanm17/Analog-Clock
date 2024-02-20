setInterval(setclock,1000);
const hourhand=document.querySelector("[data-hour-hand]")
const minutehand=document.querySelector("[data-minute-hand]")
const secondshand=document.querySelector("[data-seconds-hand]")

function setclock(){
    let currentdate=new Date();
    const secondsratio=currentdate.getSeconds()/60;
    const minuteratio=(secondsratio+ currentdate.getMinutes())/60;
    const hourratio=(minuteratio+ currentdate.getHours())/12;
    setrotation(hourhand,hourratio);
    setrotation(minutehand,minuteratio);
    setrotation(secondshand,secondsratio);


}
function setrotation(element,rotationratio){
element.style.setProperty("--rotate",rotationratio * 360);
}
setclock();