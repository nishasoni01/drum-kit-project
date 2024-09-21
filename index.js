let numberofbuttons = document.querySelectorAll(".drum").length;
for(let i = 0; i<numberofbuttons; i++){
 document.querySelectorAll(".drum")[i].addEventListener("keypress", function(event){
    // alert("this is good sound");
    // console.log(this.style.color="red");
    let button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
    


})
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})
function makeSound(key){
    switch (key) {
        case "w":
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
                let audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;    
        case "s":
                    let audio3 = new Audio("sounds/tom-3.mp3");
                    audio3.play();
                    break;
        case "d":
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
        default:
            console.log(key);
            
    }
}
function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

