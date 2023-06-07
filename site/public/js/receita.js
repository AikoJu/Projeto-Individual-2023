var dadosReceita = []
var dadosReceitaDados = []
var receita = document.getElementById("idBodyReceitas")
var nomeReceita = document.getElementById("nomeReceita");
var materialReceita = document.getElementById("materialReceita");
var pontosUtilizar =  document.getElementById("pontosUtilizar");
var passoAPasso = document.getElementById("passoAPasso");
var divMensagem2 = document.getElementById("divMensagem2")
var containerReceita = document.getElementById("receita")

var idUsuario = sessionStorage.ID_USUARIO;

var idReceita = Number(window.location.search.replace('?idReceita=', ''));

function cadastrarReceita(){
    if(nomeReceita.value == "" || materialReceita.value == "" || pontosUtilizar.value == "" ||  passoAPasso.value == ""){
        divMensagem2.innerHTML = "Campos vazios!"
    }else{
    fetch(`/receitas/cadastrarReceita/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeReceita.value,
            material: materialReceita.value,
            pontosUtilizados: pontosUtilizar.value,
            passo: passoAPasso.value
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            divMensagem2.innerHTML= "Salvo!"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            console.log(resposta)
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}
}

function obterReceita() {
    fetch(`/receitas/obterReceita/${idUsuario}`, {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {

            dadosReceita = [];

            response.json().then((resposta) => {
                dadosReceita = resposta;

                for(var i = 0; i < dadosReceita.length; i++){
                    receita.innerHTML+=`<tr><td><a href="receitaArea.html?idReceita=${dadosReceita[i].idReceitas}">${dadosReceita[i].nomeReceita}</a></td></tr>`
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

function obterDadosReceita(){
    fetch(`/receitas/obterDadosReceita/${idReceita}`, {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {

            dadosReceitaDados = [];

            response.json().then((resposta) => {
                dadosReceitaDados = resposta
                console.log(resposta)   
                nomeReceita.innerHTML = dadosReceitaDados[0].nomeReceita
                containerReceita.innerHTML = `<div class=receita>
                    <p>Material:</p>
                    <p>${dadosReceitaDados[0].material}</p>
                    <p>Pontos a serem utilizados:</p>
                    <p>${dadosReceitaDados[0].pontosUtilizados}</p>
                    <p>Passo a Passo:</p>
                    <p>${dadosReceitaDados[0].passoAPasso}</p>
                </div>`
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
    