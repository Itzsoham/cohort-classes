function setTimeoutPromisified(ms) {
  // return new Promise(resolve => setTimeout(resolve, ms));
  let p =  new Promise(resolve => setTimeout(resolve, ms));
  return p;
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)

/////////////////////////////////////////////////////////////////////////////////

function waitFor5s(resolve) {
  setTimeout(resolve, 5000);
}

function setTimeoutPromisified_Simple(){
  return new Promise(waitFor5s);
}

function main() {
  console.log("5 seconds have passed");
}

// waitFor3s(main);
setTimeoutPromisified_Simple().then(main); // promisified version of setTimeout
setTimeout(main, 5000); // callback version of setTimeout



//////////////////////////////////////////////////////////////////////////////////////////////

function readFile (filename){
  return new Promise();
}

const p = readFile("file.txt");

function onFulfilled(contents){
  console.log(contents);
}

p.then(onFulfilled);