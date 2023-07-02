    button=document.getElementById("click")
    button1=document.getElementById("click2")
    let seconds = document.getElementById("seconds")
    let minutes = document.getElementById("minutes")
    let hours = document.getElementById("hours")
    day=hours.innerText
    let timer=null;
     
    let seconds1=0
    let minutes1=0
    let hours1=0

    function displaySec(displayValue){
        document.getElementById("sec").style.display=displayValue;
    }

    function displayMin(displayValue){
        document.getElementById("min").style.display=displayValue;
    }

    function btn1(){
        
         timer=setInterval(()=>{
             seconds1++;
             if(seconds1>=10){
                displaySec("none");
             }
             if(seconds1<10){
                displaySec("inline");
             }
             
            if( seconds1>=60){
                seconds1=0;
                minutes1++;
                
                if(minutes1<10){
                    displayMin("inline")
                }

                if(minutes1>=10){
                    displayMin("none")
                }

                if (minutes1>=60){
                        minutes1=0
                        hours1++;

                        if(hours1>=10){
                        document.getElementById("hr").style.display="none";
                        }

                        hours.innerText=hours1;
                }

                minutes.innerText=minutes1;
            }
            seconds.innerText=seconds1;
        },1000);
        button.disabled=true;
        button.style.backgroundColor="rgb(147, 145, 145)";
    };
    
    function btn3(){
        clearInterval(timer);
        button.disabled=false;
        button.style.backgroundColor="black";
    }
    
    function btn2(){
        seconds1=0
        hours1=0
        minutes1=0
        hours.innerText="00";
        minutes.innerText="00";
        seconds.innerText="00";
        displaySec("none");        
        displayMin("none");
        document.getElementById("hr").style.display="none";
        clearInterval(timer);
        clearInterval(timer);
        button.disabled=false;
        button.style.backgroundColor="black";
    }
    