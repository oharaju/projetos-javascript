const lista = document.querySelectorAll('div.question')

for (let i = 0; i < lista.length; i++) {
  lista[i].addEventListener('click', function (event) {
    removeClass()
    addClass(event)
  })
}

function addClass(event) {
  event.target.classList.toggle('active')
}

function removeClass() {
  for(let i = 0; i < lista.length; i++) {
    lista[i].classList.remove('active')
  }
}
