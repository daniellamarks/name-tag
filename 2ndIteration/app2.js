// Grab the dom elements (the input box and the button) in
// Get access to user's input
// Add an event listener to the button
//https://jsfiddle.net/sayham28/01hdx3t9/
//https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount
//https://github.com/JS-Beginners/project_change_color_background/blob/master/js/script.js
//https://www.geeksforgeeks.org/how-to-change-font-style-using-drop-down-list-in-javascript/

let input1 = document.getElementById("input-1") //.value??
let input2 = document.getElementById("input-2")
let display1 = document.getElementById("signature")
let display2 = document.getElementById("pronoun")

let button = document.getElementById("change-all")
let pinkButton = document.getElementById("pink")
let greenButton = document.getElementById("lightgreen")
let blueButton = document.getElementById("lightblue")
let nameTag = document.getElementById("name-tag-color")

let turnPink = "pink";
let turnGreen = "lightseagreen";
let turnBlue = "lightskyblue"

let count = 0;
let displayCount = document.getElementById("displayCount");

button.addEventListener("click", 
 () => {
	display1.textContent = input1.value;
	display2.textContent = input2.value;
	console.log("value is", input1.value, input2.value)
	input1.value = "";
	input2.value = "";
	count++;
	displayCount.innerHTML = count;
 })

 input2.addEventListener('keyup', function(event) {
	var key = event.key || event.keyCode;
	if (key === 'Enter' || key === 13) {
	  event.preventDefault
	  button.click();  // document.getElementById('name-change-button').click();
	}
  });

  pinkButton.addEventListener("click", 
  () => {
	  nameTag.style.backgroundColor = turnPink
  })

  greenButton.addEventListener("click", 
  () => {
	  nameTag.style.backgroundColor = turnGreen
  })
  
  blueButton.addEventListener("click", 
  () => {
	  nameTag.style.backgroundColor = turnBlue
  })

const changeFontStyle = (font) => {
	nameTag.style.fontFamily = font.value
}



