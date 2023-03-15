// seleccionar elementos de html
const form = document.querySelector('#form')
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const btn = document.querySelector('#Calcular');
const resultado = document.querySelector('#resultado')

let sumarInputValues =(event)=>{
    event.preventDefault();
    console.log({event})
    let suma =Number(numero1.value) + Number(numero2.value)
    resultado.innerText = 'resultado: ' + suma;
}

form.addEventListener('submit',sumarInputValues) // funciones sin parentesis

