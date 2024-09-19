function buscar(){

fetch('https://raw.githubusercontent.com/Bru008/Api-CPF/main/dados.json').then(resposta => resposta.json()).then(corpo => {
    var identificador = document.getElementById('valor').value
    var encontrado = false;
    
    corpo.forEach(pessoa =>{

        if(identificador == pessoa.cpf) {
            var linkSite = `<a href="${pessoa.link}">Visite nosso site</a>`;
            document.getElementById('imagem').innerHTML = pessoa.imagem;
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('idade').innerHTML = pessoa.idade;
            document.getElementById('cidade').innerHTML = pessoa.cidade;
            document.getElementById('cargo').innerHTML = pessoa.cargo;
            encontrado = true;
        } else {
            document.getElementById('erro').innerHTML = "";
        }
    })

    if(!encontrado){
        document.getElementById('erro').innerHTML = "Registro inválido"
    }


    console.log(corpo)

})
}

