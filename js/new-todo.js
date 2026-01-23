import { getTodos, saveTodos } from "./storage.js";

const listEl = document.getElementById("todo-list");

const state = {
    todos: [],
    isAdding: false,
};

export function initTodos() {
    state.todos = getTodos();
    renderList();
}

function renderList() {
    const fragment = document.createDocumentFragment();

    if (state.isAdding) {
        fragment.appendChild(createInputItem());
    }


    state.todos.forEach((todo, index) => {
        fragment.appendChild(createTodoItem(todo, index));
    });

    listEl.innerHTML = "";
    listEl.appendChild(fragment);
}

function createTodoItem(todo, index) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.index = index;

    if (todo.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    li.appendChild(checkbox);
    li.appendChild(text);

    return li;
}

function createInputItem() {
    const li = document.createElement("li");
    li.className = "todo-item input";

    const spacer = document.createElement("div");
    spacer.style.width = "20px";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task...";

    let committed = false;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            committed = true;
            commitAdd(input.value);
        }
        if (e.key === "Escape") {
            cancelAdd();
        }
    });

    input.addEventListener("blur", () => {
        if (!committed) cancelAdd();
    });

    li.appendChild(spacer);
    li.appendChild(input);

    setTimeout(() => input.focus());

    return li;
}

export function startAdd() {
    if (state.isAdding) return;
    state.isAdding = true;
    renderList();
}

function commitAdd(value) {
    const text = value.trim();
    if (!text) return cancelAdd();

    state.todos.unshift({ text, done: false });
    persist();

    state.isAdding = false;
    renderList();
}

function cancelAdd() {
    state.isAdding = false;
    renderList();
}

function toggleTodo(index) {
    const todo = state.todos[index];
    if (!todo) return;

    todo.done = !todo.done;
    persist();

    updateTodoDOM(index);
}

function updateTodoDOM(index) {
    const offset = state.isAdding ? 1 : 0;
    const li = listEl.children[index + offset];
    if (!li) return;

    li.classList.toggle("done");
    li.querySelector("input").checked = state.todos[index].done;
}

function persist() {
    saveTodos(state.todos);
}

listEl.addEventListener("change", (e) => {
    const checkbox = e.target.closest("input[type='checkbox']");
    if (!checkbox) return;

    const li = checkbox.closest("li");
    const index = Number(li.dataset.index);
    toggleTodo(index);
});