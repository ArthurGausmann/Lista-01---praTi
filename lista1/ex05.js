// Calculadora de IMC (Índice de Massa Comporal)
const prompt = require('prompt-sync')()

console.log('Calculadora de IMC')

let weight = Number(prompt('Informe seu peso (em kg): '))
let height = Number(prompt('Informe sua altura (em m): '))

let calc = (weight / (height ** 2))
let imc = calc.toFixed(2)

if(imc < 0){
    console.log('Valores inseridos inválidos')
} else if(imc >= 0 & imc < 18.5){
    console.log(`Um IMC de ${imc} indica baixo peso`)
} else if(imc >= 18.5 & imc < 25){
    console.log(`Um IMC de ${imc} indica peso normal`)
} else if(imc >= 25 & imc < 30){
    console.log(`Um IMC de ${imc} indica sobre peso`)
} else if(imc >= 30){
    console.log(`Um IMC de ${imc} indica obesidade`)
}