//------ Exercício 1 ------
const btntrocarCor = document.querySelector('button')
const novaCor = document.querySelectorAll('.quadrado')

btntrocarCor.addEventListener('click', toggleColor)

function toggleColor() {
    novaCor[0].classList.toggle('nova-cor')
}

//------ Exercício 2 ------

let numeros = [65, 44, 12, 4]

numeros.forEach(item => {
    console.log(item * 10)
})