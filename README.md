# Todo Mini App

A mini project built with **HTML, SCSS, and Vanilla JavaScript**, following the provided UI mockup and requirements.

<img width="699" height="800" alt="image" src="https://github.com/user-attachments/assets/76122149-4afa-4c28-9b76-b741908b680a" />

---

## Features

- Display **current date & month** in the header
- Render a list of todo items from **localStorage**
- Each todo item includes a **checkbox**
- Checked items are shown with **strikethrough**
- **Inline add-new flow**
- **Ellipsis (`...`)** for long todo text
- **Scroll only inside the todo body**

---

## Tech Stack

- **HTML5**
- **SCSS (Dart Sass)**
- **Vanilla JavaScript**
- **localStorage** as the data source

---

## Project Structure

```text
.
├─ index.html
├─ src/
│  ├─ styles/
│  │  ├─ _variables.scss
│  │  ├─ _base.scss
│  │  ├─ _layout.scss
│  │  ├─ _todo.scss
│  │  └─ main.scss
│  └─ js/
│     ├─ storage.js
│     ├─ date.js
│     ├─ todo.js
│     └─ main.js
├─ dist/
│  └─ main.css
└─ README.md

```

---

## How to Run

#### 1. Compile SCSS (watch mode)
```text
sass --watch src/styles/main.scss dist/main.css
```

#### 2. Open the app
- Open index.html directly in the browser
- Use VSCod Live Server for a better DX

---
