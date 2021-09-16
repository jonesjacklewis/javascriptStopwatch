var interval;
var globalMilliseconds = 0;


function zeroPadding(inp, milliseconds){
    let strInp = inp.toString();

    if(!milliseconds){
        if (strInp.length == 1){
            return "0" + strInp;
        }else{
            return strInp;
        }
    }

    if (strInp.length == 1){
        return "00" + strInp;
    }else if(strInp.length == 2){
        return "0" + strInp;
    }
    else{
        return strInp;
    }

  

}


function increaseTimer(){
    globalMilliseconds += 1;


    let displayMilliseconds = globalMilliseconds % 1000.00;
    let remaining = Math.floor(globalMilliseconds / 1000.00);

    let displaySeconds = remaining % 60.00;
    remaining = Math.floor(remaining / 60.00);

    let displayMinutes = remaining % 60.00;
    remaining = Math.floor(remaining / 60.00);

    let displayHours = remaining % 60.00;

    document.getElementById("hours").innerText = zeroPadding(displayHours, false);
    document.getElementById("minutes").innerText = zeroPadding(displayMinutes, false);
    document.getElementById("seconds").innerText = zeroPadding(displaySeconds, false);
    document.getElementById("milliseconds").innerText = zeroPadding(displayMilliseconds, true);




 
}

function startTimer(){
    interval = window.setInterval(increaseTimer, 1);
}

function stopTimer(){
    window.clearInterval(interval);
}

function clearTimer(){
    globalMilliseconds = 0;

    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "000";
}

