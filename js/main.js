import { renderDate } from "./date.js";
// import { startAdd, initTodos } from "./new-todo.js";
import { renderTodos, startAdd } from "./todo.js";
import { saveTodos, getTodos } from "./storage.js";

if (!getTodos().length) {
  saveTodos([
    { text: "Buy Pizza on the way to work", done: false },
    {
      text: "Lorem Ipsum is not simplyLorem Ipsum is not simplyLorem Ipsum is not simplyLorem Ipsum is not simplyLorem Ipsum is not simply Lorem Ipsum is not simply Lorem Ipsum is not simply",
      done: false,
    },
    { text: "Buy Pizza on the way to work", done: true },
    { text: "Buy Pizza on the way to work", done: false },
    { text: "Buy Pizza on the way to work", done: false },


  ]);
}

renderDate();
// initTodos();
renderTodos();

document.getElementById("add-btn").addEventListener("click", () => {
  startAdd();
});
