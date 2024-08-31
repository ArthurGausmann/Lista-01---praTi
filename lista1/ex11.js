// Recebe 5 valores, e fornece a soma deles
const prompt = require('prompt-sync')()

console.log('Forneça 5 números para receber a soma desses valores')

let sum = 0

for(let i = 0; i < 5; i++){
    let num = Number(prompt('Insira um valor: '))
    sum += num
}

console.log(`A soma de todos os valores equivale a ${sum}`)