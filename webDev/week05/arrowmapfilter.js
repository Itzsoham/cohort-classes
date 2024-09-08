const a = [1, 2, 3, 4, 5];
var b = [];
for (let i = 0; i < a.length; i++) {
  b.push(a[i] * 2);
}
console.log(b);

console.log(
  a.map((i) => {
    return i + 5;
  })
);

console.log(
  a.filter((i) => {
    if (i % 2 == 0) {
      return i;
    }
  })
);

// assignment - create map function that take 2 inputs - array and fucntion(callback)
// transformation fucntion giv new array

function map(arr, callback) {
  const emptyArr = [];
  for (i = 0; i < arr.length; i++) {
    emptyArr.push(callback(arr[i]));
  }
  return emptyArr;
}

function plusTwo(arr) {
  return arr + 2;
}

// console.log(plusTwo(a));

console.log(map(a, plusTwo));
