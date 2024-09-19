//conectar com a PAI utilizando FETCH

fetch('https://raw.githubusercontent.com/Bru008/API/main/dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('disco').innerHTML = corpo.livro
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('preco').innerHTML = corpo.price
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