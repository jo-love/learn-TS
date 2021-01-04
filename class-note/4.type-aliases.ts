// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

let jo: Person = {
  name: "mong",
  age: 30,
};

type Todo = { id: string; title: string; done: boolean };
function getToDo(todo: Todo) {}
