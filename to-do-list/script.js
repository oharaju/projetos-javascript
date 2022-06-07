const form = document.querySelector(".register");
const taskInput = document.querySelector(".taskInput");
const list = document.querySelector(".list");

function buttonRemoveEventListener() {
  const buttonsRemove = document.querySelectorAll(".removeItem");

  for (let i = 0; i < buttonsRemove.length; i++) {
    const buttonRemoveItem = buttonsRemove[i];

    buttonRemoveItem.addEventListener("click", function (event) {
      const buttonRemove = event.target;
      const closest = buttonRemove.closest('li');
      closest.remove();
    });
  }
}

function buttonUpdateEventListener() {
  const buttonsUpdate = document.querySelectorAll(".updateItem");

  for (let i = 0; i <  buttonsUpdate.length; i++) {
    const buttonUpdateItem = buttonsUpdate[i];

    buttonUpdateItem.addEventListener("click", function (event) {
      const buttonUpdate = event.target;
      const closestUpdate = buttonUpdate.closest('li');
      closestUpdate.classList.add('updating');
    });
  }
}

function addNewItem() {
  const item = document.createElement("li");
  const text = taskInput.value;
  const input = `<input type="text" value="${text}" class="inputEdit">`;
  const btnSave = `<button class="save">salvar</button>`;
  const btnUpdate = `<button class="updateItem">editar</button>`;
  const btnRemove = `<button class="removeItem">remove</button>`;
  const buttons = `<div>${btnSave}${btnUpdate}${btnRemove}</div>`;
  item.innerHTML = `<span>${text}</span>${input}${buttons}`;
  list.appendChild(item);

  buttonUpdateEventListener();
  buttonRemoveEventListener();
}

function clearInput() {
  taskInput.value = "";
}

function handleSubmit() {
  addNewItem();
  clearInput();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (taskInput.value.length > 0){
    handleSubmit();
  }
});
