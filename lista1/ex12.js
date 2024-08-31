// Fornece a tabuada de qualquer valor inserido
const prompt = require('prompt-sync')()


let num = Number(prompt('Insira um número para descobrir sua tabuada: '))

for(let i = 1; i <= 10; i++){
    let mult = (i * num)
    console.log(`${i} x ${num} = ${mult}`)
}