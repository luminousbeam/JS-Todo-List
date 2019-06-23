//a function to store todos
function displayTodos(){
  console.log("My Todos:", todos)
}
displayTodos();

//a way to add new todos
function addTodo(toDo){
  todos.push(toDo);
}
addTodo("item 1");

//a function to change a todo
function changeToDo(position, newValue){
  todos[position] = newValue;
}
changeToDo(0,"new item");

//a function to delete a todo
function deleteTodo(position){
  todos.splice(position,1)
};
deleteTodo(2);
