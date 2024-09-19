fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia =>{
    document.getElementById('valorDoDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('maiorValor').innerHTML = economia.USDBRL.high;
    document.getElementById('menorValor').innerHTML = economia.USDBRL.low;
    console.log(economia)
})
 setInterval(() => {
    location.reload()
 }, 1000);

