function AddCarro(){
    let carro = {
        "marca": "Fiat",
        "modelo": "uno Vivace",
        "ano": 2021,
        "cor": "preta"
    }
    console.log(carro);
 
}
function AddCarro2(){
    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("ano").value,
        "cor": document.getElementById("cor").value,
    }
    console.log(carro);
 
}
function AddCarrosArray(){
    let carros = [
        {  
            "marca": "Fiat",
            "modelo": "uno Vivace",
            "Ano": 2021,
            "Cor": "preta"
        },
        {
            "marca": "VM",
            "modelo": "UP",
            "ano":2024,
            "cor":"branca"
        },
        {
            "marca": "Chevrolet",
            "modelo": "Onix",
            "ano": 2020,
            "cor": "prata"
        }
    ];
 
    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "ano": document.getElementById("ano").value,
        "cor": document.getElementById("cor").value,
 
    }
    //carros.unshift(carro);
    carros.push(carro);
 
 
 
    console.log(carros);
}
 