// Verifique se um número é par ou ímpar

const prompt = require('prompt-sync')()

console.log('Verifique se um valor é par ou ímpar')
let num = Number(prompt('Insira um valor: '))

let rest = num % 2

if(rest == 0){
    console.log(`O número ${num} é par`)
} else{
    console.log(`O número ${num} é ímpar`)
}