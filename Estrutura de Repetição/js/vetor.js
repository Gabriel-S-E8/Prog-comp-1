let ex0 = function(){
    let v = [] // Declaração do vetor
    let p
    let i
    for(let i = 0; i < 5; i++){
        v.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    // processammento
    // soma 10 em todos os elementos do vetor
    for(let i = 0; i < 5; i++){
        v[i] = v[i] + 10
    }
    console.log(v) // o comando console.log() identifica o vetor e mostra os elementos
}

let ex1 = function(){
    let v = []
    // Entrada de dados 
    for(let i = 0; i < 6; i++){
        v.push(Number(prompt(`Informe os valores ${i+1}`)))

    }
    // Processammento
    let p = [] // vetor contem os valores pares
    let im = [] // vetor contem os valores impares
    for(let i = 0; i < 6; i++){ // para cada elemento do vetor
        if (v[i] % 2 == 0){ // verifico se o elemento é par
            p.push(v[i]) // insere o elemento par no vetor p
        }
        else{
            im.push(v[i]) // insere os elementos impares no vetor im
        }
    }
    console.log(`Os valores pares são ${p} e a qtde deles é ${p.length}`)

    console.log(`Os valores impares são ${im} e a qtde deles é ${im.length}`)
}

// arrow function ou função com seta
// Ecma Script 6 - ES6 (troque a palavra fuction por uma seta)
let ex5 = () => {
    
    let l = []
    let lp = []

    // entrada de dados
    for(let i = 0; i < 15; i++) // i começa com 0
    {
        l.push(Number(prompt(`Informe o número de matrícula de logica ${i+1}`)))
    }

    for(let i = 0; i < 10; i++){
        
        lp.push(Number(prompt(`Informe o número de matrícula de LP ${i+1}`)))

    }

    // processammento (intersecção)
    let intersecção = []
    for(let i = 0; i < 15; i++){

        if (l[i] == lp[i]) {

            intersecção.push(l[i])

        }
    }
    console.log(`Os alunos que fazem tanto a disciplina lógica como linguagem são ${intersecção}`)
}

// arrow function ou função com seta
// Ecma Script 6 - ES6 (troque a palavra fuction por uma seta)
let ex4 = () =>{

    let v = [] // vetor
    //entrada de dados
    for(let i = 0; i < 15; i++) // i começa com 0
    {
        v.push(Number(prompt(`Informe o número`)))
    }
    // processammento
    let p30 = [] 
    for(let i = 0; i < 15; i++){
        if (v[i] == 30){
            p30.push(i) // Guarda a posição i e não o 30 - v[i]
        }
    }
    
    console.log(`As posições onde aparecem o número 30 são ${p30}`)
}