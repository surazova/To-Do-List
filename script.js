// Selecting the elements 
var enterButton = document.getElementbyId("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// Functions for events

// Enter 
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Enter with the enter button (#13 ASCII)
function addListAfterKeypress() {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

// Event Listeners
enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// 1. get the element (getElementById)
// 2. Add the event listener (addEventListener)
// 3. add function for that event (function addListAfterClick)
