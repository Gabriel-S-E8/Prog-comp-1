 /* JavaScript*/ 
 function organizar(){ // usamos function para organizar
    // vamos recuperar o peso digitado pelo usuario
    // getElementById("peso") -> recupera a caixa de texto
    // .value -> recupera o valor dentro da caixa de texto
    // let peso -> declarando uma variavel que guarda o peso
    let peso = document.getElementById("peso").value
    // Vamos recuperar a altura digitada pelo usuario
    let altura = document.getElementById("altura").value
    // Calcular e mostrar o IMC
    // Comando de igual é de atribuição
    // quando a variavel passa por / ou * automaticamente ocorre a conversão
    let imc = peso / (altura * altura)
    alert  (`O Valor do imc é de ${imc.toFixed(2)}`) // Mais novo
    // alert ("O Valor do imc é de " + imc) // Mais velho
    // alert (peso/(altura * altura)(to.Fixed(2)))
    // alert (imc) Forma básica sem frase
}