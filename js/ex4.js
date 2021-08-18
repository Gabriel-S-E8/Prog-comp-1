function mp(){
    // entrada de dados
    let n1 = Number(document.querySelector("#n1").value)
    let n2 = Number(document.querySelector("#n2").value)

    // processamento
    let m = ((n1 * 2.0 ) + (n2 * 3.0)) / (2+3)

    // saída
    // innerHTML 
    document.querySelector("#resultado").innerHTML = m.toFixed(2)
}