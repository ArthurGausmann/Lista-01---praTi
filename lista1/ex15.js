console.log('Este programa fornece os 10 primeiros valores da sequência de Fibonacci')

let num = 1
let numProx = 1

for(let i = 0; i < 5; i++){
    console.log(num)
    console.log(numProx)
    num = num + numProx
    numProx = numProx + num
}