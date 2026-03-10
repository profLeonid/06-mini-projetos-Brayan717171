"use strict"

function calcularDesconto(){
    const preco = parseFloat(document.getElementById("preco").value)
    const desconto = parseFloat(document.getElementById("desconto").value)
    const resultado = document.getElementById("resultado")

    const descontoCalculado = (preco * desconto) / 100
    resultado.textContent = `R$ ${(preco - descontoCalculado).toFixed(2)}`
}