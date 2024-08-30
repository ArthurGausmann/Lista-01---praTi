const prompt = require('prompt-sync')()


let fact = Number(prompt('Qual o número: '))
mult = fact
let num = 1
let i = 1

while(i <= mult){
    num = num * mult
    mult--
}

console.log(num)