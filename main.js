//maneras de obtener elementos de DOM desde javascript

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p'); // lista los elementos que cumplan con el selector
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('#parrafo2');
const input = document.querySelector('input')

console.log(
{
    h1,
    p,
    p1,
    p2,
    input,
}
)

h1.innerHTML = 'Modificando el titulo' // convierto todo a codigo html
h1.innerText = '2777 hola' // convierte tooo en texto plano
//console.log(h1.getAttribute('class')) 
//h1.setAttribute('class','titulo2') // cambiar el nombre(valores) del atributo

h1.classList.add('otra-clase'); // agregar una clase a un elemento html
h1.classList.remove('otra-clase')// remover una clase en especifico del elemento html
input.value ='hola'

// crear un elemento html desde javascript
const img = document.createElement('img')
img.setAttribute('src', 'https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc')

console.log(img)

p2.innerHTML = ''
p2.append(img)

//p2.innerHTML = `<img src="https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc">`