function calcular(){
    // Recuperar os dados do usúario
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = Number(document.getElementById("opcao").value)

    // cálculo do resultado
    let resultado
    switch (opcao) {
        case 1: 
            resultado = (n1 + n2) / 2
            break
        case 2:
            if (n1 > n2){
                resultado = n1 - n2
                }
                else {
                resultado = n2 - n1
                }
            break
        case 3:
            resultado = n1 * n2
            break
        case 4:
            if (n2 != 0) {
                resultado = n1 / n2
            }
            else {
                resultado = "Não pode dividir por zero !!!"
            }
            break
        case 5:
            resultado = "opção invalida"
            break  
        
    }
    alert(`O resultado é ${resultado}`)
}
