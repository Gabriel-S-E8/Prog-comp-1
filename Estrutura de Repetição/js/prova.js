let ex2 = () =>{

    // declarando variaveis
    let v = []
    let vm = []
    // entrada de dados
    for (let i = 0; i < 12; i++){

        v.push(Number(prompt(`informe os Nome do ${i+1}º jogador`)))

    }
    for (let i = 0; i < 12; i++){
        
        vm.push(Number(prompt(`Informe as medias de pontos do ${i+1}º jogador`)))
    }

    // processamento 
    let media
    for (let i = 0; i < 12; i++){
        media = vm[i]/12
    }
    console.log(`A media dos pontos do time é ${media}`)
    
    let mvp
    let pontos
    for (let i = 0; i < 12; i++){
        if ((vm[i] > 0) && (v[i] == vm[i])){
            mvp = v[i]
            pontos = vm[i]
        }
    }
    console.log(`O jogador com mais pontos é ${mvp} com ${pontos} pontos`)

    let p = [] // vetor de pares

    for (let i = 0; i < 12; i++){

        if (vm[i] % 2 == 0){
            
            p.push(vm[i])
        }
    }


    
}

let ex1 = () =>{
    // declarando variaveis
    let opcao
    let v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0
    let aux = 0
    let i = 1
    let total = 0
    while (opcao ){

        opcao = Number(prompt(`Vote nas opções \n 1.Entregas pelo ava \n 2.Entregas apenas em papel \n 3.Entregas pelo WPP \n 4.Entregas pelo e-mail \n 5.tanto faz \n digite 0 para finalizar`))
    }
        switch(opcao != 0){
            case 1:
                v1++
            break
            case 2:
                v2++
            break
            case 3:
                v3++
            break
            case 4:
                v4++
            break
            case 5:
                v5++
            break
            default:
                if(n != 0){
                    alert(`Código inválido. Digite outro por gentileza.`)
                }
                else{
                    alert(`Programa encerrado`)
                }
            break
        }
        total = v1 + v2 + v3 + v4 + v5

        //Total de votos das opções
        console.log(`O total de votos é: Opção 1: ${v1}\n Opção 2: ${v2}\n Opção 3: ${v3}\n Opção 4: ${v4}\n Opção 5: ${v5}\n`)
        //a porcentagem de votos do Tanto Faz 
        console.log(`A porcentagem de votos em tanto faz será de ${(v5/td)*100}`)
        //ordem decrescente de quanto recebeu cada tipo de entrega

        while (i <= 4) {
            if (v1 > v2) { // trocar a com b
                aux = v1
                v1 = v2
                v2 = aux
            }
            if (v2 > v3) { // trocar b com c
                aux = v2
                v2 = v3
                v3 = aux
            }
            if (v3 > v4) { // trocar c com d
                aux = v3
                v3 = v4
                v4 = aux
            }
            if (v4 > v5) { // trocar c com d
                aux = v4
                v4 = v5
                v5 = aux
            }
    
            i++
        }
        console.log(`A ordem crescente é ${v1} ${v2} ${v3} ${v4} e a ordem decrescente é ${v4} ${v3} ${v2} ${v1}`) 
}