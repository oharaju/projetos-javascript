const form = document.querySelector(".register");
const taskInput = document.querySelector(".taskInput");
const list = document.querySelector(".list");

let tasks = [
  "Estudar JavaScript",
  "Levar o lixo",
  "Ligar para faculdade",
  "Fazer Compras",
];

function buttonRemoveEventListener() {
  const buttonsRemove = document.querySelectorAll(".removeItem");

  for (let i = 0; i < buttonsRemove.length; i++) {
    const buttonRemoveItem = buttonsRemove[i];

    buttonRemoveItem.addEventListener("click", function () {
      console.log("removeu");
    });
  }
}

function generateList() {
  const list = document.querySelector(".list");
  for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement("li");
    const task = tasks[i];
    item.innerHTML = `<p>${task}</p><button class="removeItem">remove</button>`;
    list.appendChild(item);
  }
  buttonRemoveEventListener();
}

function removeAllTask() {
  document.querySelector("ul").innerHTML = "";
}

function addNewItem() {
  tasks.push(taskInput.value);
}

function clearInput() {
  taskInput.value = "";
}

function handleSubmit() {
  addNewItem();
  clearInput();
  removeAllTask();
  generateList();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  handleSubmit();
});

generateList();
