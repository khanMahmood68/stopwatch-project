var tens=0;
var sec=0;
var min=0;
var outputTens=document.getElementById("tens");
var outputSec=document.getElementById("sec");
var outputMin=document.getElementById("min");
var buttonStart=document.getElementById("start");
var buttonStop=document.getElementById("stop");
var buttonReset=document.getElementById("reset");
var interval;
buttonStart.addEventListener('click',()=>{
    interval=setInterval(startTimer,10);//millisecond 10=0.01 second

});
buttonStop.addEventListener('click',()=>{
    clearInterval(interval);
});
buttonReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens="00";
    sec="00";
    min="00";
    outputTens.innerHTML=tens;
    outputSec.innerHTML=sec;
    outputMin.innerHTML=min;
});
function startTimer(){
    tens++;
    if(tens<=9){
        outputTens.innerHTML="0"+tens;

    }
    if(tens>9){
        outputTens.innerHTML=tens;
    }
    if(tens>99){
        sec++;
        outputSec.innerHTML="0"+sec;
        tens=0;
        outputTens.innerHTML="0"+0;
    }
    if(sec>9){
        outputSec.innerHTML=sec;
    }
    if(sec>59){
        min++;
        outputMin.innerHTML="0"+min;
        tens=0;
        outputTens.innerHTML="0"+0;
        sec=0;
        outputSec.innerHTML="0"+0;
    }
    if(min>9){
        outputMin.innerHTML=min;
    }
}
