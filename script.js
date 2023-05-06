var counter = 0;

var audioFiles = ["audio/on.mp3", "audio/off.mp3", "audio/21.mp3", "audio/69.mp3", "audio/1000.mp3", "audio/420.mp3", "audio/107.mp3"];

for (var i = 0; i < audioFiles.length; i++) {
    var audio = new Audio(audioFiles[i]);
    audio.load();
}

var img = new Image();
img.src = "images/on.svg";
img.load();

function pictureChange() {


    var bulb = document.getElementById("lightbulb");
    var text = document.getElementById("text");
    var counterDisplay = document.getElementById("counter");

    if (bulb.src.endsWith("images/on.svg")) {
        new Audio("audio/on.mp3").play();
        bulb.src = "images/off.svg";
        text.style.color = "black";
        text.innerHTML = "<p>turn on the lightbulb to make it happy</p>";
    } 

    else {
        new Audio("audio/off.mp3").play();
        bulb.src = "images/on.svg";
        text.innerHTML = "<p>the lightbulb is happy!</p>";
        counter++;
        counterDisplay.innerHTML = counter;
        if (counter === 21) {
            new Audio("audio/21.mp3").play();
            text.style.color = "#008480";
        }
        else if (counter === 69) {
            new Audio("audio/69.mp3").play();
            text.style.color = "#008480";;
        }
        else if (counter === 1000) {
            new Audio("audio/1000.mp3").play();
            text.style.color = "#008480";;
        }
        else if (counter === 420) {
            new Audio("audio/420.mp3").play();
            text.style.color = "#008480";;
        }
        else if (counter === 107) {
            new Audio("audio/107.mp3").play();
            text.style.color = "#008480";;
        }
        else {
            text.style.color = "black";
        }
    }
    bulb.classList.toggle("on");
}
