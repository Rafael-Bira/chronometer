let hours = 0;
let mins = 0;
let secs = 0;
let millisecs = 0;
let interval = null;
let display = document.getElementById("timeDisplay");

function start() {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(timeCounter, 10);
    
    function timeCounter() {
        millisecs += 10;
        if(millisecs === 1000) {
            millisecs = 0;
            secs++;
            if(secs === 60) {
                secs = 0;
                mins++;
                if(mins === 60) {
                    mins = 0;
                    hours++;
                }
            }
        }
        // This adds one zero if the number < 10 or two zeros if millisecs < 100     
        let h = hours < 10 ? "0" + hours : hours;
        let m = mins < 10 ? "0" + mins : mins;
        let s = secs < 10 ? "0" + secs : secs;
        let ms = millisecs < 10 ? "00" + millisecs : millisecs < 100 ? "0" + millisecs : millisecs;
        
        display.innerHTML = `${h}:${m}:${s}:${ms}`;
    }
}

function pause() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    hours = 0;
    mins = 0;
    secs = 0;
    millisecs = 0;
    display.innerHTML = "00:00:00:000";
}

// Print the current time as a marker
function addMarker() {
    let newMarker = document.createElement("li");
    newMarker.innerHTML = display.innerHTML;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.setAttribute("class", "remove");
    newMarker.appendChild(deleteBtn);
    
    // Delete the current marker
    deleteBtn.addEventListener("click", function removeMarker() {
        newMarker.remove();
    });

    document.getElementById("markersList").appendChild(newMarker);
}
