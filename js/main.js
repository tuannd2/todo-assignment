import { renderDate } from "./date.js";
import { renderTodos, startAdd } from "./todo.js";
import { saveTodos, getTodos } from "./storage.js";

if (getTodos().length === 0) {
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
renderTodos();

document.getElementById("add-btn").addEventListener("click", () => {
  startAdd();
});
