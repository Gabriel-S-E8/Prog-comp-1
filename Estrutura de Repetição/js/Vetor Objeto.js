// Criar vetor com objetos
//A
let v = [];

for (let i = 0; i < 4; i++) {
    //cria objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: prompt(`Informe a qtde do produto`),
        preco: prompt(`Informe a preco do produto`)
    }
    // Adiciona o objeto no vetor
    vetor.push(objeto)
}


//B
let v = [];

for (let i = 0; i < 4; i++) {
    //cria objeto
    let objeto = new Object()

    objeto.nome = prompt(`Informe o nome do produto`),
    objeto.qtde = prompt(`Informe a qtde do produto`),
    objeto.preco = prompt(`Informe a preco do produto`)
    
}
    // Adiciona o objeto no vetor
    vetor.push(objeto)

// Calcula média de preço dos produtos
let soma = 0

for (let i = 0; i < 1; i++) {
    soma = soma + vetor[i]
    
}
