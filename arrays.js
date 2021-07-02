/* O conj dentro do [] começa no zero (Paula=0) */
const alunaGama = ["Paula", "Maria", "Ana", "Lara"]
//Acessar informações num array: chama o array e coloca o indice []
console.log(alunaGama[1])

//Operador spread (...)
const alunasXP = [...alunaGama, "Rafa"]

console.log(alunasXP)

//Métodos de iteração
/* for (let i=0; i<alunasXP.length; i++) {
    console.log(alunasXP[i])
} */

//Método de iteração 
//Map
alunasXP.map(aluna => console.log(aluna))

//Filter
const numeros = [35,45,67,90,55,76]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(`Números ímpares são: ${numerosImpares}`)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(`Números pares são: ${numerosPares}`)

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=>b-a)
console.log(numerosOrdenadosDecrescente)

//Reduce: reduz nosso array a um resultado de uma operação matemática
const numbers =[1,34,35]

const soma = numbers.reduce((ValorAnterior, ValorAtual)=>{
    return ValorAnterior + ValorAtual
},5)

console.log(soma) //Vai dar 75, que é a soma de 1,34,35 + o 5 do final do cód
