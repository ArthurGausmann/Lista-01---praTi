const prompt = require('prompt-sync')()

console.log('Verificador de preços')

let apple = Number(prompt('Quantas maçãs deseja comprar: '))

if(apple > 0 & apple < 12){
    let price = (0.3 * apple)
    console.log(`${apple} maçãs irão custar R$ ${price}`)
} else if(apple >= 12){
    let price = (0.25 * apple)
    console.log(`${apple} maçãs irão custar R$ ${price}`)
} else{
    console.log('Valor inserido inválido')
}