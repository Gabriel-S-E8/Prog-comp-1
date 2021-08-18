function verificar(){
    // recuperar os dados do usuario 
    let idade = Number(document.querySelector("#idade").value)
    let peso = Number(document.querySelector("#peso").value)
    let risco

    // switch é para casos de igualdade, e não de <, > <= >=

    if (idade < 20) 
    {
        if (peso < 60) 
        {
            risco = 9
        }
        else if ((peso >= 60) && (peso <= 90)) 
        {
            risco = 8
        }
        else {
            risco = 7
        }
    }
    else if ((idade >= 20) && (idade <= 50))
    {
        if (peso < 60)
        {
            risco = 6    
        }
        else if ((peso >= 60) && (peso <= 90)) 
        {
            risco = 5    
        }
        else 
        {
            risco = 4
        }
    }
    else // idade pe maior que 50
    {
        if (peso < 60) 
        {
            risco = 3    
        }
        else if ((peso >= 60) && (peso <= 90)) 
        {
            risco = 2    
        }
        else
        {
            risco = 1
        }
    }
    document.getElementById("resultado").innerHTML = risco
}