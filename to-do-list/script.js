const form = document.querySelector(".register");
const taskInput = document.querySelector(".taskInput");
const list = document.querySelector(".list");

function createEventListener(classButton, callback) {
  const buttons = document.querySelectorAll(classButton);

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", function (event) {
      callback(event);
    });
  }
}

function removeItem(e) {
  const buttonRemove = e.target;
  const closest = buttonRemove.closest('li');
  closest.remove();
}

function updateItem(e) {
  const buttonUpdate = e.target;
  const closestUpdate = buttonUpdate.closest('li');
  closestUpdate.classList.add('updating');
}

function saveItem(e) {
  const buttonSave = e.target;
  const saveItem = buttonSave.closest('li');
  const valueInput = saveItem.querySelector('.inputEdit').value;
  const elementText = saveItem.querySelector('span');
  const valueText = elementText.innerHTML;

  if (valueInput != valueText && valueInput.length > 0) {
    elementText.innerHTML = valueInput;
    saveItem.classList.remove('updating');
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

  createEventListener(".removeItem", removeItem);
  createEventListener(".updateItem", updateItem);
  createEventListener(".save", saveItem);
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

  if (taskInput.value.length > 0) {
    handleSubmit();
  }
});
