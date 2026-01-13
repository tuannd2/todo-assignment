import { getTodos, saveTodos } from "./storage.js";

const listEl = document.getElementById("todo-list");

let isAdding = false;

export function renderTodos() {
  const todos = getTodos();
  listEl.innerHTML = "";

  if (isAdding) renderInputItem();

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", () => {
      toggleTodo(index);
    });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    li.appendChild(checkbox);
    li.appendChild(text);
    listEl.appendChild(li);
  });
}

function renderInputItem() {
  const li = document.createElement("li");
  li.className = "todo-item input";

  const spacer = document.createElement("div");
  spacer.style.width = "20px";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "New task...";

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      commitAdd(input.value);
    }

    if (e.key === "Escape") {
      cancelAdd();
    }
  });

  input.addEventListener("blur", () => {
    cancelAdd();
  });

  li.appendChild(spacer);
  li.appendChild(input);
  listEl.prepend(li);

  input.focus();
}

function commitAdd(value) {
  const text = value.trim();

  if (!text) return cancelAdd();

  const todos = getTodos();
  todos.unshift({ text, done: false });
  saveTodos(todos);

  isAdding = false;
  renderTodos();
}

function cancelAdd() {
  isAdding = false;
  renderTodos();
}

export function startAdd() {
  if (isAdding) return;

  isAdding = true;
  renderTodos();
}

function toggleTodo(index) {
  const todos = getTodos();
  todos[index].done = !todos[index].done;
  saveTodos(todos);
  renderTodos();
}
