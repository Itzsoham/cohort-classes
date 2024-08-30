function addToDo() {
  const inputEl = document.querySelector("input");
  const inputElValue = inputEl.value;
  console.log(inputElValue);
}
let text = 0;

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
