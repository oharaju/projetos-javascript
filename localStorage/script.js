
const form = document.querySelector('.register');
const taskInput = document.querySelector('.taskInput');
const list = document.querySelector('.list');

function addItem() {
  const text = taskInput.value;
  const itemTask = document.createElement('li');
  document.querySelector('.list').appendChild(itemTask);
  itemTask.innerHTML = `${text}`;

  localStorage.setItem(list, '')
}


const clearInput = function() {
  taskInput.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addItem()
  clearInput()
});
