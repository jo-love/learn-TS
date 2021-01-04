// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };
let todoItems: {id: number; title: string; done: boolean}[];

function fetchTodoItems(): {id: number; title: string; done: boolean}  [] { 
  const todos = [
    { id: 1, title: "알고리즘 첫걸음", done: false },
    { id: 2, title: "트렌트 코리아2020", done: false },
    { id: 3, title: "코어 자바스크립트", done: false },
  ];
  return todos;
}

function fetchTodos() :object[]{
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: {id: number; title: string; done: boolean}): void {
  todoItems.push(todo);
}

function deleteTodo(index: number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: {id: number; title: string; done: boolean}):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

function logFirstTodo():object {
  return todoItems[0];
}

function showCompleted(): {id: number; title: string; done: boolean}[]  {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
  const item1 = {
    id:4,
    title:'작은 아씨들',
    done: false,
  };

  const item2 = {
    id:5,
    title:'다빈치코드',
    done: false,
  }

  addTodo(item1);
  addTodo(item2);
}

function log(): void {
  console.log(todoItems);
}
 
todoItems = fetchTodoItems();
addTwoTodoItems();
log();