"use strict"

function calcularMedia(){
    const nota1 = parseFloat(document.getElementById("1").value)
    const nota2 = parseFloat(document.getElementById("2").value)
    const nota3 = parseFloat(document.getElementById("3").value)
    const resultado = document.getElementById("resultado")

    const notaCalculada = (nota1 + nota2 + nota3) / 3  
    removerClasses()

    if(notaCalculada >= 7 ){                           
        resultado.textContent = `Sua nota é: ${notaCalculada.toFixed(2)} — Aprovado`
        resultado.classList.add("media1")

    }else if(notaCalculada >= 5  && notaCalculada <= 6.9){
        resultado.textContent = `Sua nota é: ${notaCalculada.toFixed(2)} — Recuperação`
        resultado.classList.add("media2")

    }else if(notaCalculada < 5){                       
        resultado.textContent = `Sua nota é: ${notaCalculada.toFixed(2)} — Reprovado`
        resultado.classList.add("media3")
    }
}

function removerClasses(){ 
    const resultado = document.getElementById("resultado")
    resultado.classList.remove('media1', 'media2', 'media3')
}