
var numOfButtons = document.querySelectorAll(".drum").length
const buttons = document.querySelectorAll(".drum")
const audioFiles = {
'w':'sounds/tom-1.mp3',
'a':'sounds/tom-2.mp3',
's':'sounds/tom-3.mp3',
'd':'sounds/tom-4.mp3',
'j':'sounds/crash.mp3',
'k':'sounds/kick-bass.mp3',
'l':'sounds/snare.mp3'}


function playSound(key) {
	var audio = new Audio(audioFiles[key]);
	audio.play();
}

buttons.forEach(button => {
	button.addEventListener("click", function() {

	// console.log(this.innerHTML)
	playSound(this.innerHTML)
	buttonAnimation(this.innerHTML)
	})
})

document.addEventListener("keydown", function(event) {
	playSound(event.key)
	buttonAnimation(event.key)
})

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("."+currentKey)
	activeButton.classList.add("pressed")
	activeButton.classList.add("white")

	setTimeout(() => {
		activeButton.classList.remove("pressed")
		activeButton.classList.remove("white")
	}, 200);
}

