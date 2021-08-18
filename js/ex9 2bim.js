function calcular(){
    // Recuperar os dados do usuario
    let sdm = Number(document.querySelector("#sdm").value)

    // definindo a variavel de resultado
    let result

    // Calcular 
    if (sdm <= 200) {
        result = sdm * 0.10
    }
    else if ((sdm > 200) && (sdm <= 300)) {
        result = sdm * 0.20
    }
    else if ((sdm > 300) && (sdm <= 400)) {
        result = sdm * 0.25
    }
    else if (sdm > 400) {
        result = sdm * 0.30
    }
    document.querySelector("#resp").innerHTML = result.toFixed(2)
}