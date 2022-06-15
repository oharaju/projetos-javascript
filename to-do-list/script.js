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

function doneItem(e) {
  const inputDone = e.target;
  const done = inputDone.closest('li');
  done.classList.toggle('checkDone');
}

function removeItem(e) {
  const buttonRemove = e.target;
  const closest = buttonRemove.closest('li');
  closest.remove();
}

function updateItem(e) {
  const buttonUpdate = e.target;
  const item = buttonUpdate.closest('li');
  item.classList.add('updating');
  const input = item.querySelector('.inputEdit');
  input.focus();

}

function saveItem(e) {
  const buttonSave = e.target;
  const saveItem = buttonSave.closest('li');
  const valueInput = saveItem.querySelector('.inputEdit').value.toUpperCase();
  const elementText = saveItem.querySelector('span');
  const valueText = elementText.innerHTML;


  if (valueInput != valueText && valueInput.length > 0) {
    elementText.innerHTML = valueInput;
    saveItem.classList.remove('updating');
  }
}

function addNewItem() {
  const item = document.createElement("li");
  const text = taskInput.value.toUpperCase();
  const inputEdit = `<input type="text" value="${text}" class="inputEdit">`;
  const checkDone = `<input type="checkbox" class="checkDone">`;
  const btnSave = `<button class="btnItem btnItem--saveColor save"><i class="fa-solid fa-floppy-disk"></i></button>`;
  const btnUpdate = `<button class="btnItem btnItem--updateColor updateItem"><i class="fa-solid fa-pencil"></i></button>`;
  const btnRemove = `<button class="btnItem btnItem--removeColor removeItem"><i class="fa fa-trash"></i></button>`;
  const buttons = `<div>${btnSave}${btnUpdate}${btnRemove}</div>`;
  item.innerHTML = `<div class="box">${checkDone}<span>${text}</span>${inputEdit}</div>${buttons}`;
  list.appendChild(item);

  createEventListener(".checkDone", doneItem);
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
