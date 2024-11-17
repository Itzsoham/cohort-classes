type UserTypes = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}

// this is the difference between type and interface. how we define it
// we can't implenment types in class
// with types we can do union and intersection

// array in types

function getMax(arr: number[]): number {
  return Math.max(...arr);
}

console.log(getMax([1, 2, 3, 4, 5]));

interface Votes {
  name: string;
  age: number;
}

function iseligibleToVote(voter: Votes[]) {
  let voters: object[] = [];
  voter.map((v) => (v.age >= 18 ? voters.push(v) : null));

  return voters;
}
