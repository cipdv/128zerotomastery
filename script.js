var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// var items = ul.getElementsByTagName("li");
// console.log(items);

//WITH AN IF STATEMENT:


// var li = document.getElementsByTagName("li");

// for (i = 0; i < li.length; i++) {
// 	var listItem = li[i]
// };

// listItem.addEventListener ("click", function () {li.classList.toggle("done");})


//first try:
//var listItem = document.getElementsByTagName("li");

// listItem.addEventListener("click", function () {
// 	listItem.className.toggle("done");	
// })

//second try:
// var listItem = document.getElementById("item-2");

// listItem.addEventListener("click", function () {
// 	listItem.classList.toggle("done");	
// })

// //third try:
// var li = document.getElementsByTagName("li");

// li.onClick = function () {
// 	li.classList.toggle("done");
// }



function inputLength() {
	return input.value.length;
}

//ADD DELETE BUTTON TO NEW LI
var appButton = document.createElement("button");
appButton.innerHTML = "delete";

appButton.addEventListener ("click", function(){
	appButton.parentNode.remove();
})


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//ADD DELETE BUTTON TO NEW LI ELEMENTS
	li.appendChild(appButton);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);