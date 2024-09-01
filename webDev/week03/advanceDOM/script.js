let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function deleteFirstToDo() {
  todos.shift();
  render();
}

function deleteLastToDo() {
  todos.pop();
  render();
}

function deleteTodo(i) {
  todos.splice(i, 1);
  render();
}

function createToDoComponant(todo, test) {
  const divEl = document.createElement("div");
  let h4El = document.createElement("span");
  let btnEl = document.createElement("button");
  btnEl.setAttribute("onclick", "deleteTodo(" + test + ")");
  h4El.innerHTML = todo.title;
  btnEl.innerHTML = "Delete";
  divEl.append(h4El);
  divEl.append(btnEl);
  test++;
  return divEl;
}
function render() {
  document.querySelector("#todo").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const el = createToDoComponant(todos[i], i);
    document.querySelector("#todo").appendChild(el);
  }
}
