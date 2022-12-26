//------ Exercício 1 ------
const btnTrocarCor = document.querySelector('button')
btnTrocarCor.addEventListener('click', toggleAmarelo)

function toggleAmarelo() {
    const novaCor = document.querySelectorAll('.quadrado')
    novaCor[0].classList.toggle('nova-cor')
}

//------ Exercício 2 ------

let numeros = [65, 44, 12, 4]

numeros.forEach(item => {
    console.log(item * 10)
})

//------ Exercício 3 ------

const quadradoPreto = document.querySelector('.preto')
quadradoPreto.addEventListener('click', toggleAzul)

function toggleAzul() {
    alert('Esse quadrado TEM a classe azul!')
    quadradoPreto.classList.toggle('azul')
}

//------ Exercício 4 ------

const campo = document.querySelectorAll("input[name='validacao']")

campo.forEach(input => {
    input.addEventListener('change', function () {
        if (input.value !== '') {
            input.classList.add('valido')
        } else if (input.value === '') {
            input.classList.remove('valido')
        }
    })
})