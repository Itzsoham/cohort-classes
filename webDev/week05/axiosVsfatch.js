const axios = require("axios");
async function main() {
  const response = await fetch("https://www.sum-server.100xdevs.com/todos");
  const data = await response.json();
  console.log(data.todos.length);
}

async function main() {
  const response = await axios.get("https://www.sum-server.100xdevs.com/todos");
  console.log(response.data.todos.length);
}

main();
