"use strict"

function calcularIMC() {
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    // Validação
    if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.textContent = "Por favor, preencha todos os campos corretamente."
        return
    }

    const imc = peso / (altura * altura)

    let classificacao
    if (imc < 18.5) {
         classificacao = "Abaixo do peso"
    }     
    else if (imc < 25) {
        classificacao = "Peso normal"
    }   
    else if (imc < 30) {
        classificacao = "Sobrepeso"

    }  
    else if (imc < 35) {
         classificacao = "Obesidade Grau I"

    }  
    else if (imc < 40) {
        classificacao = "Obesidade Grau II"

    }  
    else{ classificacao = "Obesidade Grau III"

    }              

    resultado.textContent = `${nome}, seu IMC é: ${imc.toFixed(2)} — ${classificacao}`
}