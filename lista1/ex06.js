// Recebe 3 valores e informa se eles formam um triângulo, se sim, qual tipo
const prompt = require('prompt-sync')()

console.log('Verificador de triângulos')

let A = Number(prompt('Insiria o valor do lado A: '))
let B = Number(prompt('Insiria o valor do lado B: '))
let C = Number(prompt('Insiria o valor do lado C: '))

if(A < B + C & B < A + C & C < A + B){
    console.log('Esses valores formam um triângulo')
    if(A == B & B == C){
        console.log('Esse triângulo é equilátero')
    } else if(A != B & B != C & A != C){
        console.log('Esse triângulo é escaleno')
    } else if(A == B || A == C || B == C){
        console.log('Esse triângulo é isóceles')
    }
} else{
    console.log('Esses valores não formam um triângulo')
}