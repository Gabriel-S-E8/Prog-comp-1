  /* JavaScript*/ 
  function Viagem(){
    // entrada de daddos
    // p1,p2 e c são variaveis
    // number() -> converte texto em número
    let p1 = Number(document.getElementById("pedagio1").value)
    let p2 = Number(document.getElementById("pedagio2").value)
    let c = Number(document.getElementById("combustivel").value)
    // processamento
    let valor = p1 + p2 + c
    alert(`O valor da viagem é de ${valor.toFixed(2)}`)
}