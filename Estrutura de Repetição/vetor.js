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