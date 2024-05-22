let score: number | string = 44;
score = 10;
score = "101";
// score = true;

type User = {
  name: string;
  uId: number;
  gender: string;
  isLoggedIn: boolean;
};

type Admin = {
  username: string;
  adminId: number;
};

let shubham: User | Admin = { username: "Shubham", adminId: 122 };

shubham = { username: "Aditi", adminId: 1250 };

shubham = { name: "Sonal", uId: 120, gender: "Male", isLoggedIn: true };

function getUserById(id: number | string) {
  //   return id + 1;

  if (typeof id === "number") {
    return id + 1;
  }

  return id.toUpperCase();
}

console.log(getUserById(12));

// Array

const num1: number[] = [1, 2, 3];
const num2: string[] = ["1", "2"];

// const num3: number[] | string[] = ["1", "2", 3];
const num3: (number | string | boolean)[] = [1, 2, "4"];

// +++++++++++++++++
let seatAlloted: "business" | "executive";
// seatAlloted = "poor";

export {};
