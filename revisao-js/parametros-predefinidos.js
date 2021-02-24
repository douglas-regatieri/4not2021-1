//Parametros predefinidos ou opicionais em funções
//Regras:
//1ª: Parâmetros opcionais/predefinidos devem vir após os obrigatórios
//2ª: Pode haver mais de um parâmetro opcional por função

//forma com parametro predefinido ou opcional
function calcularArea(base, altura, forma = 'Q', casasDec = 2){
    let res
    switch(forma){
        case 'Q':
            res = base * altura
            break
        case 'T':
            res = base * altura / 2
            break
        case 'E':
            res = (base/2) * (altura/2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))

console.log(calcularArea(30, 60)) //Usando o Parâmetro predefinido forma = 'Q'



