const prompt = require('prompt-sync')()


console.log('Bem-vinda(o) à maleta da sorte!!')

let option = Number(prompt('Escolha entre as maletas 1, 2 ou 3: '))

switch(option){
    case 1:
        console.log('Você ganhou uma viagem!')
        break
    case 2:
        console.log('Você ganhou R$ 10.000,00!')
        break
    case 3:
        console.log('Você não ganhou nada!')
        break
    default:
        console.log('Opção inserida inválida!')
        break
}