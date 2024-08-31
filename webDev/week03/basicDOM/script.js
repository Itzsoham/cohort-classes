let text = 0;
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
