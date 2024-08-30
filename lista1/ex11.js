const prompt = require('prompt-sync')()


let sum = 0

for(let i = 0; i < 5; i++){
    let num = Number(prompt('Insira um valor: '))
    sum += num
}

console.log(`A soma de todos os valores equivale a ${sum}`)