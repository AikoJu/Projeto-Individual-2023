var contador = document.getElementById("carreiraEPontoAtual")
var mensagem = document.getElementById("divMensagem")

var carreiraInput = document.getElementById("carreiraInput");
var pontoInput = document.getElementById("pontosInput");

var carreiraAtual = document.getElementById("carreiraAtual");//span
var pontoAtual = document.getElementById("pontoAtual");//span

var nomeProjeto = document.getElementById("nomeProjeto");

var valorSpanCarreira = Number(carreiraAtual.textContent);
var valorSpanPonto = Number(pontoAtual.textContent);

var idProjeto = Number(window.location.search.replace('?idProjeto=', ''));

var nomeReceita = document.getElementById("nomeReceita");
var materialReceita = document.getElementById("materialReceita");
var pontosUtilizar =  document.getElementById("pontosUtilizar");
var passoAPasso = document.getElementById("passoAPasso")
var divMensagem2 = document.getElementById("divMensagem2")

var containerReceita = document.getElementById("containerReceita")
 


var projeto = []
var dadosProjeto = []
var dadosReceita = []


function obterDadosProjeto(){
    fetch(`/projetos/obterDadosProjeto/${idProjeto}`, {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {
            dadosProjeto = [];
            response.json().then((resposta) => {
                dadosProjeto = resposta;
                nomeProjeto.innerHTML = dadosProjeto[0].nomeProjeto
                if(dadosProjeto[0].pontos != null && dadosProjeto[0].carreira != null && dadosProjeto[0].pontosAtual != null && dadosProjeto[0].carreiraAtual != null ){
                   contador.style.display = "flex"
                   
                   exibirAntigo()   
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


function exibirAntigo(){
    carreiraInput.value = dadosProjeto[0].carreira
    pontoInput.value = dadosProjeto[0].pontos
    carreiraAtual.innerHTML = dadosProjeto[0].carreiraAtual
    pontoAtual.innerHTML = dadosProjeto[0].pontosAtual
    salvar()
}   



function salvar(){
    projeto = []
    if(carreiraInput.value != "" || pontoInput.value != ""){
    var peca = {
        carreira: carreiraInput.value,
        ponto: pontoInput.value
    }
    projeto.push(peca)
    contador.style.display = "flex"
    
    }else{
        mensagem.innerHTML = "Campos vazios!"
    }
}

function atualizarPontoSubtrair(){
      if(valorSpanPonto > 1){
        valorSpanPonto = valorSpanPonto -1
        pontoAtual.innerHTML=valorSpanPonto
      }
}

function atualizarPontoSomar(){
        if(valorSpanPonto < projeto[0].ponto ){
            valorSpanPonto = valorSpanPonto + 1
            pontoAtual.innerHTML=valorSpanPonto
        }else{
            atualizarCarreira()
        }
}

function atualizarCarreira(){
    if(valorSpanCarreira < projeto[0].carreira){
        valorSpanCarreira = valorSpanCarreira + 1
        carreiraAtual.innerHTML = valorSpanCarreira
        valorSpanPonto = 0
        pontoAtual.innerHTML = 0
         
    }else{
        carreiraInput.value = 1
        pontoInput.value = 1
        valorSpanCarreira = 0
        carreiraAtual.innerHTML = 0
        valorSpanPonto = 0
        pontoAtual.innerHTML = 0
        mensagem.innerHTML = "Peça terminada!"
        setTimeout(function() {
            mensagem.style.display = "none";
          }, 2000);
        contador.style.display = "none"

        
    }
}

function salvarAtuais(){
        fetch(`/projetos/atualizarAtuais/${idProjeto}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pontos: projeto[0].ponto,
                carreira: projeto[0].carreira,
                pontosAtual: valorSpanPonto,
                carreirasAtual: valorSpanCarreira
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                mensagem.innerHTML= "Salvo!"
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
    
    function apagarProjeto(){
        fetch(`/projetos/apagarProjeto/${idProjeto}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(function(resposta){
            if(resposta.ok){
                window.location = "projetos.html"
                console.log("resposta: ", resposta);
            }else if(resposta.status == 404){
                window.alert("Deu 404!")
            }else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }



    function cadastrarReceita(){
        if(nomeReceita.value == "" || materialReceita.value == "" || pontosUtilizar.value == "" ||  passoAPasso.value == ""){
            divMensagem2.innerHTML = "Campos vazios!"
        }else{
            console.log(passoAPasso.value)
        fetch(`/projetos/cadastrarReceita/${idProjeto}`, {
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
                mensagem.innerHTML= "Salvo!"
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

        function obterReceita(){
            fetch(`/projetos/obterReceita/${idProjeto}`, {
                method: 'GET'
            }).then((response) => {
                if (response.ok) {
                    dadosReceita = [];
                    response.json().then((resposta) => {
                        dadosReceita = resposta;
                        console.log(resposta)
        
                    })
                } else if (response.status == 404) {
                    return alert('Deu 404!')
                } else {
                    throw ("Houve um erro ao tentar buscar os setores: " + response.status);
                }
            }).catch((error) => {
                console.error(error);
            });
        
    }