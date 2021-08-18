// Programação funcional - paradigma de programação
let exercicio0 = function(){
    let soma = 0 // Valor que neutraliza a soma (0 não atrapalha a soma)

    let i = 1

    while (1 <= 10){
        let nota = Number(prompt(`Informe a nota`))

        soma = soma + nota

        i++
    }
    let media = soma / 10
    alert(`À média das notas é ${media}`)
}

function exercicio1(){

}

// Programação estruturada - paradigma de programação
function exercicio2(){

    let qtde = 120
    let lucro
    let saida = "" //Varíavel acumuladora
    let ml = 0
    let mqt = 0
    let mp = 0 // preco que me dá maior lucro

    for(let preco = 5.0; preco >= 1.0; preco = preco - 0.50)
    {
        lucro = (preco * qtde) - 200
        if(lucro > ml) // encontramos um lucro maior que o ml
        {
            ml = lucro
            mqt = qtde
            mp = preco
        }
        saida = saida + `<tr> <td> R$ ${preco} </td> <td> R$ ${qtde}</td> <td> R$ 200 </td> <td> R$ ${lucro} </td> </tr>`

        //Prepara para a proxima vez

        qtde = qtde + 26
    }
    document.getElementById("corpo").innerHTML = saida
    alert(`Maior lucro ${ml} com qtde ${mqt} com preco ${mp}`)

}

function exercicio3(){

}

function exercicio6(){
    
    let valor // Valor definido pelo usuario
    let tipo  // Valor é definido pelo usuario
    let tp // valor serão acumulado 
    let tv

    for(let i = 1;i<=5;i++){
        valor = Number(prompt(`Informe o valor da transação ${i}`))
        tipo = prompt(`Informe o tipo (V para a vista e P para a prazo) ${i}`).toUpperCase // converte para maiúscula
        if(tipo == `V`){ // A vista
            tv = tv + Valor
        }
        else if(tipo == `P`){ // A Prazo
            tp = tp + Valor
        }
    }
    // Soma dos totais

    let tg = tp + tv

    // Primeira parcela do total a prazo

    let parcela = tp / 3

    alert(`Total a vista ${tv}  Total a prazo ${tp} Total Geral ${tg} 1a Parcela a prazo ${parcela}`)
}

// programação funcional para
// A nossa função agora é uma variavel
let ex23 = function(){
    let opcao // recebe a opção do usuario
    // Vamos oferecer um menu de opções

    let salario // Recebe salario 

    do {
        opcao = Number(prompt(`Digite \n 1. Novo salário \n 2. 3. Décimo terceiro \n 4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário`))
                    if(salario < 2100){
                        alert(`Novo salário ${salario +salario * 15/100}`)
                    }
                    else if ((salario > 2100) && (salario <= 6000)){
                        alert(`Novo salário ${salario + salario * 10/100}`)
                    }
                    else {
                        alert(`Novo salário ${salario + salario * 5/100}`)
                    }
                break
            case 2: salario = Number(prompt(`Informe o salário`))
                    alert(`o valor das férias é ${salario + 1/3 *salario}`)
                break
            case 3: salario = Number(prompt(`Informe o salário`))
                    let meses = Number(prompt(`Informe número de meses trabalhados`)) 
                    alert(`Décimo terceiro a receber ${salario * meses/12}`)
                break
            case 4: alert("O programa será encerrado.")
                break
            default: alert("Opção inválida. Tente novamente!")
        }
    }
    while ((opcao >= 4) && (opcao <= 0))
}

