var counter = 0;

function pictureChange() {
    var img = new Image();
    img.src = "images/on.svg";

    var bulb = document.getElementById("lightbulb");
    var text = document.getElementById("text");
    var counterDisplay = document.getElementById("counter");

    if (bulb.src.endsWith("images/on.svg")) {
        new Audio("audio/on.mp3").play();
        img.onload = function() {
            bulb.src = "images/off.svg";
            text.innerHTML = "<p>turn on the lightbulb to make it happy</p>";
        };
    } 

    else {
        new Audio("audio/off.mp3").play();
        img.onload = function() {
            bulb.src = "images/on.svg";
            text.innerHTML = "<p>the lightbulb is happy! you can turn it off if you want to</p>";
        }
        counter++;
        counterDisplay.innerHTML = counter;
        if (counter === 21) {
            new Audio("audio/21.mp3").play();
        }
        else if (counter === 69) {
            new Audio("audio/69.mp3").play();
        }
        if (counter === 1000) {
          new Audio("audio/1000.mp3").play();
        }
        else if (counter === 420) {
          new Audio("audio/420.mp3").play();
        }
    }
    bulb.classList.toggle("on");
}
