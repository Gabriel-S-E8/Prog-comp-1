function calcular(){
    // recupera os dados do usuario
    let distancia = Number(document.getElementById("distancia").value)
    let consumo = Number(document.getElementById("consumo").value)
    let preço = Number(document.getElementById("preço").value)

    // calcuklar valor gasto
    let gasto = (distancia / consumo) * preço

    // mostra ao usuario
    document.getElementById("resposta").innerHTML = gasto.toFixed(2)
}
