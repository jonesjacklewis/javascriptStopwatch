var interval;
var globalMilliseconds = 0;


function zeroPadding(inp, milliseconds){
    let stringInput = inp.toString();

    if(!milliseconds){
        if (stringInput.length == 1){
            return "0" + stringInput;
        }else{
            return stringInput;
        }
    }

    if (stringInput.length == 1){
        return "00" + stringInput;
    }else if(stringInput.length == 2){
        return "0" + stringInput;
    }
    else{
        return stringInput;
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
    interval = window.setInterval(increaseTimer, 1); // runs every millisecond
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

