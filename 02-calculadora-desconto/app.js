"use strict"

// Funções puras
const calcularValorEconomizado = (preco, desconto) => (preco * desconto) / 100

// Funções puras
function calcularPrecoFinal (preco, desconto) {
    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    return preco - valorEconomizado
}


// Funções puras
function definirClasseDesconto (desconto) {
    if (desconto <= 5) return "desconto1"
    else if(desconto <= 10) return "desconto2"
    return "desconto3"
}


const removerClasses = (elemento) => {  elemento.classList.remove("desconto1", "desconto2", "desconto3")  }

function calcularDesconto() {
    const preco = parseFloat(document.getElementById("preco").value)
    const desconto = parseFloat(document.getElementById("desconto").value)
    const resultado = document.getElementById("resultado")

    const resultadoFinal = calcularPrecoFinal(preco, desconto)
    const cor = definirClasseDesconto(desconto)

    removerClasses(resultado)
    resultado.classList.add(cor)
    resultado.textContent = `De R$ ${preco.toFixed(2)} por R$ ${resultadoFinal.toFixed(2)} — você economizou R$ ${calcularValorEconomizado(preco, desconto).toFixed(2)}`
} 