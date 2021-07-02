const pessoa = {
    nome: "Lara",
    idade: 23,
    cidade: "Curitiba"
}

console.log(pessoa.nome)

//Notação de colchetes~
pessoa['idade']
console.log(pessoa.idade)

//Como desestruturar objetos
const {nome, idade, cidade} = pessoa

console.log(cidade)

