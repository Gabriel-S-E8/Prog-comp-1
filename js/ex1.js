function Conta(){
    let km = Number(document.querySelector('#km').value)
    let kml = Number(document.querySelector('#kml').value)
    let vl = Number(document.querySelector('#vl').value)

    let total= (km/kml)*vl
    alert (`Combustivel gasto é ${total.toFixed(2)}`)
}
