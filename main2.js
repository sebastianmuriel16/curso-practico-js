// seleccionar elementos de html
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const btn = document.querySelector('#Calcular');
const resultado = document.querySelector('#resultado')

let btnOnClick =()=>{
    let suma =Number(numero1.value) + Number(numero2.value)

    resultado.innerText = suma;
}

