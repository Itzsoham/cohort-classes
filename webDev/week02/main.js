class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolves().forEach((fn) => fn());
    });
  }
  then(fn) {
    this.resolves().push(fn);
  }
}

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});
