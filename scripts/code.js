/* eslint-disable no-param-reassign */

const texto = document.getElementById('texto');
const textoEncriptado = document.getElementById('texto-encriptado');
const encriptar = document.getElementById('button-encriptar');
const desencriptar = document.getElementById('button-desencriptar');
const botonCopiar = document.querySelector('.boton-copiar');

// FUNCIONES

const displayElementos = (elemento, display) => {
  for (let i = 0; i < elemento.length; i += 1) {
    elemento[i].style.display = display;
  }
};

// OCULTAR ELEMENTOS "IMG, BOTON COPIAR," DEL TEXTAREA DE LA DERECHA

texto.addEventListener('input', () => {
  const textoInput = texto.value;
  if (textoInput.length > 0) {
    textoEncriptado.value = textoInput;

    const ocultos = document.querySelectorAll('.oculto');
    displayElementos(ocultos, 'none');

    const textButtonOculto = document.querySelectorAll('.text-button-oculto');
    displayElementos(textButtonOculto, 'block');
  } else {
    const ocultos = document.querySelectorAll('.oculto');
    displayElementos(ocultos, 'block');

    const textButtonOculto = document.querySelectorAll('.text-button-oculto');
    displayElementos(textButtonOculto, 'none');
  }
});

// BOTON COPIAR EVENT!!

botonCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(textoEncriptado.value);
});

// EVENT BOTON ENCRIPTAR

const encriptarLetras = {
  e: 'enter',
  o: 'ober',
  i: 'imes',
  a: 'ai',
  u: 'ufat',
};

encriptar.addEventListener('click', () => {
  const mensaje = document.getElementById('texto').value.toLowerCase();

  const mensajeEncriptar = mensaje.split('').map((letra) => encriptarLetras[letra] || letra).join('');

  document.getElementById('texto-encriptado').value = mensajeEncriptar;
});

// EVENT BOTON DESENCRIPTAR

desencriptar.addEventListener('click', () => {
  const mensajeDesencriptado = document.getElementById('texto').value.toLowerCase();
  let mensajeDesencriptadoR = '';
  for (let i = 0; i < mensajeDesencriptado.length; i += 1) {
    if (mensajeDesencriptado.substring(i, i + 5) === 'enter') {
      mensajeDesencriptadoR += 'e';
      i += 4;
    } else if (mensajeDesencriptado.substring(i, i + 4) === 'ober') {
      mensajeDesencriptadoR += 'o';
      i += 3;
    } else if (mensajeDesencriptado.substring(i, i + 4) === 'imes') {
      mensajeDesencriptadoR += 'i';
      i += 3;
    } else if (mensajeDesencriptado.substr(i, 2) === 'ai') {
      mensajeDesencriptadoR += 'a';
      i += 1;
    } else if (mensajeDesencriptado.substring(i, i + 4) === 'ufat') {
      mensajeDesencriptadoR += 'u';
      i += 3;
    } else {
      mensajeDesencriptadoR += mensajeDesencriptado[i];
    }
  }
  document.getElementById('texto-encriptado').value = mensajeDesencriptadoR;
});

// PRUEBAS
