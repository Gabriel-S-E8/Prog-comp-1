function verificar(){
    
    let codigo = Number(document.querySelector("#codigo").value)
    let qtde = Number(document.querySelector("qtde").value)
    let pu
    
    if ((codigo >= 1) && (codigo <= 10)) 
    {
        pu = 10    
    }
    else if ((codigo >= 11) && (codigo <= 20)) 
    {
        pu = 15    
    }
    else if ((codigo >= 21) && (codigo <= 40)) 
    {
        pu = 20    
    }
    else if ((codigo >= 31) && (codigo <= 40)) 
    {
        pu = 30    
    }
    else
    {
        pu = 0
    }
    let pt = pu * qtde
    let vd
    if (pt < 250) 
    {
        vd = (10 * pt) / 100    
    }
    else if ((pt >= 250) && (pt <= 500)) 
    {
        vd = (10 * pt) / 100    
    }
    else
    {
        vd = (15 * pt) / 100
    }

    let pf = pt - vd

    // saida
    
    document.getElementById("pu").innerHTML = pu
    document.getElementById("pt").innerHTML = pt
    document.getElementById("vd").innerHTML = vd
    document.getElementById("pf").innerHTML = pf

}