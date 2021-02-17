
//Arrow Function para corpos com mais de uma linha Voltam as chaves
//(Os Parênteses em torno do argumento são necessários por se tratar de um argumento de resto)

let somaTudo2 = (...nums) => {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

