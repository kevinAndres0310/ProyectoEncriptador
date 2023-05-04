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

  const encriptarMensaje = mensaje.split('').map((letra) => encriptarLetras[letra] || letra).join('');

  document.getElementById('texto-encriptado').value = encriptarMensaje;
});

// EVENT BOTON DESENCRIPTAR

desencriptar.addEventListener('click', () => {
  const mensaje = document.getElementById('texto').value.toLowerCase();

  let txtCifrado = mensaje.replace(/enter/igm, 'e');
  txtCifrado = txtCifrado.replace(/ober/igm, 'o');
  txtCifrado = txtCifrado.replace(/imes/igm, 'i');
  txtCifrado = txtCifrado.replace(/ai/igm, 'a');
  txtCifrado = txtCifrado.replace(/ufat/igm, 'u');

  document.getElementById('texto-encriptado').value = txtCifrado;
});
