let text = 3;
function addToDo() {
  const inputEl = document.querySelector("input");
  const inputElValue = inputEl.value;
  text = text + 1;
  const newDivEle = document.createElement("div");
  newDivEle.setAttribute("id", "todo-" + text);
  newDivEle.innerHTML =
    "<h4>" +
    inputElValue +
    '</h4><button onclick="deleteTodo(' +
    text +
    ')">delete</button>';

  document.querySelector("div").appendChild(newDivEle);
}

function test() {
  text++;
  document.querySelector("h4").innerHTML = text;
  console.log(text);
}

// setInterval(test, 1000);

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}

//////////////////////////////////////////////////

let currentIndex = 3;

function addTodo() {
  const inputEl = document.getElementById("inp");
  const todoText = inputEl.value.trim();

  if (todoText === "") {
    alert("Please enter a todo item.");
    return;
  }

  const parentEl = document.getElementById("todos");

  // Create new todo div
  const newTodo = document.createElement("div");
  newTodo.setAttribute("id", "todo-" + currentIndex);

  // Create new heading element
  const newHeading = document.createElement("h4");
  newHeading.textContent = currentIndex + ". " + todoText;

  // Create new button element
  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");

  // Append elements to the new todo div
  newTodo.appendChild(newHeading);
  newTodo.appendChild(newButton);

  // Append new todo to the parent element
  parentEl.appendChild(newTodo);

  // Increment the index for the next todo item
  currentIndex++;

  // Clear the input field
  inputEl.value = "";
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  if (element) {
    element.parentNode.removeChild(element);
  }
}
