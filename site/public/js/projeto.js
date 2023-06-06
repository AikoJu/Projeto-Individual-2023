var projetos = document.getElementById("containerProjeto");
var idUsuario = sessionStorage.ID_USUARIO;
var nomeProjeto = sessionStorage.NOME_PROJETO;
var projetosListados = []


function obterProjetos() {
    

    fetch(`/projetos/listar/${idUsuario}`, {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {

            projetosListados = [];

            response.json().then((resposta) => {
                projetosListados = resposta;

                for(var i = 0; i < projetosListados.length; i++){
                    projetos.innerHTML+=`<a href="projetoArea.html?idProjeto=${projetosListados[i].idProjeto}"><div class="cards">
                    <p>Projeto:</p>
                    ${projetosListados[i].nomeProjeto}
                   </div></a>`
                }

            })
        } else if (response.status == 404) {
            return alert('Du 404!')
        } else {
            throw ("Houve um erro ao tentar buscar os setores: " + response.status);
        }
    }).catch((error) => {
        console.error(error);
    });
}



function cadastrarProjeto(){
    var nomeVar = document.getElementById("nomeProjeto").value;
    var mensagem = document.getElementById("idMensagem")
    if(nomeVar.value = ""){
        mensagem.innerHTML = "Nome vazio!"
    }else{
    fetch(`/projetos/cadastrar/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeVar
        })
    }).then(function (resposta) {
        setTimeout(function() {
            location.reload();
        }, 1000);
        
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert = "Projeto Criado!";

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
}