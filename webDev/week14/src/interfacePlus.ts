interface People {
  name: string;
  age: number;
  greet: () => string;
}

let person: People = {
  name: "Kai",
  age: 6,
  greet() {
    return "hihihihi";
  },
};

console.log(person.greet());

class Manager implements People {
  // made name and age public
  //   name: string;
  //   age: number;
  //   greet: () => string;
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
    // this.greet = () => "Hello, I am " + this.name; // ANOTHER WAY TO IMPLENEBT FUNCTION
  }
  greet = () => "Hello, I am " + this.name;
}

let manager = new Manager("Zai", 69);

console.log(manager.greet());

abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract greet(): string;
  hello() {
    return "Hello," + this.name; // this is different between abstract and interface where you can implement function in abstract class
  }
}

// class Admin extends User {
//     name: string;
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
//   greet() {
//     return "Hello, I am " + this.name;
//   }
// }

class Admin extends User {
  constructor(name: string) {
    super(name);
  }
  greet() {
    return "Hello, I am " + this.name;
  }
}

let admin = new Admin("Kai");
console.log(admin.hello());
