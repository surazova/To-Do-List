// Selecting the elements 
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// Functions for events
function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

// Creating an entry 
function createListElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value)); // makes text from input field the li text 
  ul.appendChild(li); // adds li to the ul
  input.value = ""; //Resets the text input field


  // Strikethrough 
  function strikeThrough() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", strikeThrough);

  // Delete Button 
  var deleteBtn = document.createElement("button");

  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);

  // Add class delete 
  function deleteListItem() {
    li.classList.add("delete");
  }
}
// Enter 
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Enter with the enter button (#13 ASCII)
function addListAfterKeypress(event) {
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
