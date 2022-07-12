function hide(btn) {
	console.log("btn was hiddin");
	btn.remove();
}

function notification(element) {
	alert("You are looking at a " + element.value);
}

var count = 1;
var countElement = document.querySelector("#-pets");
console.log(countElement);

function add() {
	count++;
	countElement.innerText = count + " petting(s)";
	console.log(count);
}

var count = 1;
var paragraphElement = document.querySelector("#br");
console.log(paragraphElement);

function plus() {
	count++;
	paragraphElement.innerText = count + " petting(s)";
	console.log(count);
}

var count = 1;
var buttonElement = document.querySelector("#os");
console.log(buttonElement);

function mas() {
	count++;
	buttonElement.innerText = count + " petting(s)";
	console.log(count);
}