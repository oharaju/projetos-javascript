const lista = document.querySelectorAll('div.question')

for (let i = 0; i < lista.length; i++) {
  lista[i].addEventListener('click', function (event) {

    if (event.target.classList.contains('active')) {
      removeClass()
    } else {
      removeClass()
      addClass(event)
    }
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
