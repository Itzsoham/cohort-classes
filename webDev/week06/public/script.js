async function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  await axios
    .post("http://localhost:3000/signing-up", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function signin() {
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;
  await axios
    .post("http://localhost:3000/signing-in", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getUserInformation() {
  await axios
    .get("http://localhost:3000/me", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      document.getElementById("information").innerHTML =
        "Username is " + response.data.username;
    })
    .catch((error) => {
      console.log(error);
    });
}

getUserInformation();

function logout() {
  localStorage.removeItem("token");
}
