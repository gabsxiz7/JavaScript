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
    //carros.push(carro);
    carros.splice(2,1, carro);

    console.log(carros);

    let findCarro = carros.find(carro => carro.cor == "vermelho");

    console.log(findCarro);

    let filterCarro = carros.filter(car => car.ano >= 2005);
    console.log(filterCarro);
}

 