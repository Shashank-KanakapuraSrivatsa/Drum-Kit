//function to watch for button click event and further play sounds and animation.
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var buttonText = this.innerHTML;
        playDrum(buttonText);
        buttonAnimation(buttonText);
          
    });
}

//function to watch for keypress event and further play sounds and animation.
document.addEventListener("keydown", function (event) {
    playDrum(event.key);
    buttonAnimation(event.key);
});

//switch case to key or button was pressed as input and subsequently decide which sound to play for respective button or key
function playDrum(key) {
    switch (key) {
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a" :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d" :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j" :
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k" :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l" :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default : console.log("Default! Non-standard key pressed.")
    } 
}

//function to play animations when a button or key is pressed
function buttonAnimation(key) {
    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100)
}