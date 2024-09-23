//conectar com a PAI utilizando FETCH

fetch('https://raw.githubusercontent.com/Bru008/API/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('disco').innerHTML = corpo.livro
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('preco').innerHTML = corpo.price

    document.getElementById('imagem1').innerHTML = corpo.image
    document.getElementById('nome1').innerHTML = corpo.name
    document.getElementById('disco1').innerHTML = corpo.livro
    document.getElementById('estilo1').innerHTML = corpo.style
    document.getElementById('preco1').innerHTML = corpo.price

    document.getElementById('imagem2').innerHTML = corpo.image
    document.getElementById('nome2').innerHTML = corpo.name
    document.getElementById('disco2').innerHTML = corpo.livro
    document.getElementById('estilo2').innerHTML = corpo.style
    document.getElementById('preco2').innerHTML = corpo.price
})

function alerta(){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Produto adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 1500
});
}

//https://raw.githubusercontent.com/Bru008/API/main/dados.json