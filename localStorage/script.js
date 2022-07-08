const form = document.querySelector('.register');
const taskInput = document.querySelector('.taskInput');
let tasks = JSON.parse(localStorage.getItem('listTask')) || [];

function addTaskToLocalStorage() {
  const currentTask = taskInput.value;
  tasks.push(currentTask);
  const newTasks = JSON.stringify(tasks);
  localStorage.setItem('listTask', newTasks);
}

const clearInput = function() {
  taskInput.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTaskToLocalStorage()
  clearInput()
});
