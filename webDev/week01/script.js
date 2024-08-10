// Assignmensts from day 2
// 1 - Write a function that takes a user as an input and greets them with their name and age

function Greet(name, age) {
  console.log("Hello " + name + ". You are " + age + " year old");
}
Greet("Ram", 18);
// 2 -Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// 3 - Also tell the user if they are legal to vote or not

function Greetings(Name) {
  firstName = Name.firstName;
  let gender = Name.gender;
  let age = Name.age;

  if (gender === "M") gender = "Mr";
  else if (gender === "F") gender = "Mrs";
  else gender = "Others";

  console.log("Hi " + gender, firstName + ", Your age is " + age);

  if (age >= 18) console.log("You can vote too");
}
let person = {
  firstName: "Kai",
  age: 2,
  gender: "M",
};
Greetings(person);

// Write a function called sum that finds the sum from 1 to a number

function sum(n) {
  total = 0;
  for (i = 1; i <= n; i++) {
    total = total + i;
  }

  return total;
}

console.log("Total is " + sum(10));

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let arr = [1, 2, 4, 5, 6, 16, 7, 8, 9];

function even(num) {
  return num % 2 === 0;
}

console.log(arr.filter(even));

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

let users = [
  { firstName: "Kai", age: 20, gender: "M" },
  { firstName: "Zen", age: 23, gender: "F" },
  { firstName: "Zai", age: 16, gender: "M" },
];

function Adults(person) {
  return person.age > 18;
}
console.log(users.filter(Adults));

function maleAdults(person) {
  return person.age > 18 && person.gender === "M";
}
console.log(users.filter(maleAdults));
