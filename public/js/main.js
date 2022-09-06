const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
const todoReset = document.querySelectorAll("span.reset");

const todoCircle = document.querySelectorAll(".fa-circle");
const todoCheck = document.querySelectorAll(".fa-circle-check");

Array.from(deleteBtn).forEach((el) => {
 el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
 el.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((el) => {
 el.addEventListener("click", markIncomplete);
});

Array.from(todoCircle).forEach((el) => {
 el.addEventListener("click", markComplete);
});

Array.from(todoCheck).forEach((el) => {
 el.addEventListener("click", markIncomplete);
});

Array.from(todoReset).forEach((el) => {
 el.addEventListener("click", resetTodo);
});

async function deleteTodo() {
 const todoId = this.parentNode.dataset.id;
 try {
  const response = await fetch("/todos/deleteTodo", {
   method: "delete",
   headers: { "Content-type": "application/json" },
   body: JSON.stringify({
    todoIdFromJSFile: todoId,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (err) {
  console.log(err);
 }
}

async function markComplete() {
 const todoId = this.parentNode.dataset.id;
 console.log(this);
 try {
  const response = await fetch("/todos/markComplete", {
   method: "put",
   headers: { "Content-type": "application/json" },
   body: JSON.stringify({
    todoIdFromJSFile: todoId,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (err) {
  console.log(err);
 }
}

async function markIncomplete() {
 const todoId = this.parentNode.dataset.id;
 try {
  const response = await fetch("/todos/markIncomplete", {
   method: "put",
   headers: { "Content-type": "application/json" },
   body: JSON.stringify({
    todoIdFromJSFile: todoId,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (err) {
  console.log(err);
 }
}

async function resetTodo() {
 const todoId = this.parentNode.dataset.id;
 console.log(this);
 try {
  const response = await fetch("/todos/resetTodo", {
   method: "put",
   headers: { "Content-type": "application/json" },
   body: JSON.stringify({
    todoIdFromJSFile: todoId,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (err) {
  console.log(err);
 }
}
