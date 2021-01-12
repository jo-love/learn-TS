const MONG: string | number | boolean = "world";
function getMSG(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

getMSG("hello");
getMSG(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone({ name: "mong", skill: "TS", age: 10 });
