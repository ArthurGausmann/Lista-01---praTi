const prompt = require('prompt-sync')()


console.log('Calculadora de fatorial, escreva um valor e receba seu fatorial')

let fact = Number(prompt('Qual o número: '))
mult = fact
let num = 1
let i = 1

while(i <= mult){
    num = num * mult
    mult--
}

console.log(`${fact}! = ${num}`)