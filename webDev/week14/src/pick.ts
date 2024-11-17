interface CurrentUser {
  name: string;
  readonly email: string;
  avatar: string;
  password: string;
  age: number;
}

type UpadateUser = Pick<CurrentUser, "name" | "avatar" | "password">; //  now you can only update name, avatar, password but have to pass all 3
type UpadateUser2 = Partial<CurrentUser>; // now you can update any of the fields but not all are required

const user3: Readonly<CurrentUser> = {
  name: "John",
  email: "test@test.com",
  avatar: "test",
  password: "test",
  age: 20,
};

function updateUser(user: UpadateUser) {
  // some logic
  console.log(user);
}

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
// handleEvent("scroll"); // Error: Argument of type 'scroll' is not assignable to parameter of type 'click' | 'mousemove'

////////////////

type Users = Record<string, { id: string; name: string }>;
// type Users = { [key: string]: { id: string; name: string } }; // same as above but using index signature

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

const mapUsers = new Map<string, { id: string; name: string }>();

mapUsers.set("abc123", { id: "abc123", name: "John Doe" });
mapUsers.set("xyz789", { id: "xyz789", name: "Jane Doe" });

console.log(mapUsers.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }
