let x: number = 1;
console.log(x);

function greet(name: any) {
  console.log(`Hello, ${name}`);
}

// greet(6);

function sum2Fuc(a: Function, b: Function) {
  return a() + b();
}

function isLegal(age: number) {
  return age >= 18;
}

console.log(isLegal(44));

function delayCall(fn: (a: any) => void) {
  setTimeout(fn, 1000);
}

delayCall(() => {
  console.log("hihi");
  return 0;
});

delayCall(() => greet("world"));
