let vetor = [10,20,30]

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

//Desestruturação de vetor: as variaveis do vetor secundário podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

//Desestruturação de Objeto: as variaveis do vetor secundários devem ser semelhantes às propriedades do objeto
let {nome, idade, naturalidade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

//Desestruturação Parcial de um objeto
let obj2 = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)
