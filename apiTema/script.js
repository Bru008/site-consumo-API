

function buscar(){
    fetch('https://raw.githubusercontent.com/Bru008/api-Tema/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value
        var encontrado = false;
        
        corpo.forEach(pessoa =>{

            if(identificador == pessoa.number) {
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome
                document.getElementById('elemento').innerHTML = pessoa.elemento
                document.getElementById('vida').innerHTML = pessoa.vida
                document.getElementById('habilidade').innerHTML = pessoa.habilidade
                document.getElementById('dano').innerHTML = pessoa.dano
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