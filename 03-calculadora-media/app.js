"use strict"

function calcularMedia(){
    const nota1 = parseFloat(document.getElementById("1").value)
    const nota2 = parseFloat(document.getElementById("2").value)
    const nota3 = parseFloat(document.getElementById("3").value)
    const resultado = document.getElementById("resultado")

    const notaCalculada = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
    resultado.textContent = `Sua nota é : ${(notaCalculada).toFixed(2)}`
}