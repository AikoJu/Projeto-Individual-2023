var dadosReceita = []
var receita = document.getElementById("idBodyReceitas")
var nomeReceita = document.getElementById("nomeReceita");
var materialReceita = document.getElementById("materialReceita");
var pontosUtilizar =  document.getElementById("pontosUtilizar");
var passoAPasso = document.getElementById("passoAPasso");
var divMensagem2 = document.getElementById("divMensagem2")

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
                    receita.innerHTML+=`<a href="receitaArea.html?idReceita=${dadosReceita[i].idReceitas}"><tr><td>${dadosReceita[i].nomeReceita}</td></tr></a>`
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


    