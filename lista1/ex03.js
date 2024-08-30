const prompt = require('prompt-sync')()


let grade = Number(prompt('Insira uma nota entre 0 e 10: '))

if(grade < 0 || grade > 10){
    console.log('Nota inserida inválida')
} else if(grade >= 0 & grade < 4){
    console.log(`Você foi reprovado`)
} else if(grade >= 4 & grade < 7){
    console.log(`Você está de recuperação`)
} else if(grade >= 7 & grade <= 10){
    console.log(`Você foi aprovado`)
}