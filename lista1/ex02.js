const prompt = require('prompt-sync')()


let age = Number(prompt('Qual a sua idade: '))

if(age < 0){
    console.log('Idade inválida')
} else if(age >= 0 & age < 11){
    console.log(`Você é uma criança de ${age} anos`)
} else if(age >= 11 & age < 18){
    console.log(`Você é um adolescente de ${age} anos`)
} else if(age >= 18 & age < 60){
    console.log(`Você é um adulto de ${age} anos`)
} else if(age >= 60){
    console.log(`Você é um idoso de ${age} anos`)
}