function calcular(){
    // Recuperar os dados do usúario
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = Number(document.getElementById("opcao").value)

    // cálculo do resultado
    let resultado

    if (opcao == 1) { // resultado será a média 
        resultado = (n1 + n2) / 2
    }
    else if (opcao == 2) { // resultado será maior menos o menor
        if (n1 > n2){
        resultado = n1 - n2
        }
        else {
        resultado = n2 - n1
        }
    }
    else if (opcao == 3){ // resultado será a multiplicação
        resultado = n1 * n2
    }
    else if (opcao == 4){ // resultado será a divisão
        if (n2 != 0) {
            resultado = n1 / n2
        }
        else {
            resultado = "Não pode dividir por zero !!!"
        }
    }
    else {
        resultado = "opção invalida"
    }
    alert(`O resultado é ${resultado}`)
}
