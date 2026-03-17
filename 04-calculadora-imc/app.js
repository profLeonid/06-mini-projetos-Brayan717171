"use strict"


// Funções puras
const calcularIMC = (peso, altura) => peso / (altura * altura)

function definirClassificacao(imc) {
    if      (imc < 18.5) return "Abaixo do peso"
    else if (imc < 25.0) return "Peso normal"
    else if (imc < 30.0) return "Sobrepeso"
    else if (imc < 35.0) return "Obesidade grau I"
    else if (imc < 40.0) return "Obesidade grau II"
    else                 return "Obesidade grau III"
}

function definirClasse(imc) {
    if      (imc < 18.5) return "imc1"
    else if (imc < 25.0) return "imc2"
    else if (imc < 30.0) return "imc3"
    else if (imc < 35.0) return "imc4"
    else if (imc < 40.0) return "imc5"
    else                 return "imc6"
}
const removerClasses = (elemento) => {
    elemento.classList.remove("imc1", "imc2", "imc3", "imc4", "imc5", "imc6")
}

function calcularResultado() {
    const nome      = document.getElementById("nome").value         
    const altura    = parseFloat(document.getElementById("altura").value)
    const peso      = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    const resultadoFinal            = calcularIMC(peso, altura)    
    const classificacao = definirClassificacao(resultadoFinal)
    const classe        = definirClasse(resultadoFinal)

    removerClasses(resultado)
    resultado.classList.add(classe)  
    resultado.textContent = `${nome}, seu IMC é ${resultadoFinal.toFixed(2)}  ${classificacao}` 
}