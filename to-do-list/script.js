const form = document.querySelector('.register');
const addItem = document.querySelector('.addItem');
const taskInput = document.querySelector('.taskInput');
const list = document.querySelector('.list');

let task = ['Estudar JavaScript', 'Levar o lixo', 'Ligar para faculdade', 'Fazer Compras']

function generateList() {
  const list = document.querySelector('.list')
  for (let i= 0; i < task.length; i++) {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(task[i]))
    list.appendChild(item)
  }
  console.log(generateList)
}

generateList()