// Forneça um valor à ser exibido 10x 
const prompt = require('prompt-sync')()

console.log('O valor fornecido será exibido 10 vezes no terminal')

let num = Number(prompt('Insira um valor: '))

for(let i = 0; i < 10; i++){
    console.log(num)
}