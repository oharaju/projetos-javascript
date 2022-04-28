let resultado = document.querySelector('h2.resultado');
let numero = 0;

function adicionar() {
  numero++;
  resultado.innerHTML = numero;
  resultado.classList.remove('cor-red');
  resultado.classList.add('cor-green');
}

function diminuir() {
  numero--;
  resultado.innerHTML = numero;
  if (numero == 0) {
    zerar()
  } else {
    resultado.classList.remove('cor-green');
    resultado.classList.add('cor-red');
  }
}

function zerar() {
  numero = 0;
  resultado.innerHTML = numero;
  resultado.classList.remove('cor-red');
  resultado.classList.remove('cor-green');
}