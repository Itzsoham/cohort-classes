// let welcome = (user: { firstName: string; age: number }) =>
//   console.log("yo " + user.firstName);

interface UserType {
  firstName: string;
  age: number;
  dob?: Date;
}

interface Customer {
  info: UserType; // interface can use other interface for reusebility
  phone: number;
}

let welcome = (user: UserType) => console.log("yo " + user.firstName);

let user = {
  firstName: "King",
  age: 20,
  dob: new Date("2011-11-11"),
};

let user2: UserType = {
  firstName: "Kai",
  age: 7,
};

welcome(user);
welcome(user);
isLegal(user.age);

type SumInput = string | number; // type providethis also many other functionalities
// interface SumInput = string | number; // you can't do this with interface

// ts can add string + number
// ts can add string + string
// ts can add number + number

// ts can not add number | stirng + number | string

function sum(a: SumInput, b: SumInput) {
  //   return a + b;
}
