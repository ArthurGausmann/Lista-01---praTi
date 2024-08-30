const prompt = require('prompt-sync')()


let num
let sum = 0
let counter = -1
let avg = 0

while(num != 0){
    num = Number(prompt('Forneça um número decimal (escreva zero para receber a média): '))
    sum += num
    counter++
}

avg = sum / counter

console.log(`A média dos valores fornecidos é ${avg}`)