var usuarios = document.getElementById('numeroUsuarios')
var projeto = document.getElementById('numeroProjetos')

listaTotais = []
const ctx1 = document.getElementById('myChart').getContext('2d')
    
    listaNivel = [] 

    fetch(`graficoUsuarios/dadosGrafico`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (resposta) {
            
            if (resposta.ok) {
                resposta.json().then((json)=> {
                    console.log(json)
                    json.forEach(element => {
                       listaNivel.push(element.qtdUsuarios)
                    });
                }).then(()=>{
                    carregarGrafico2()
                })
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        

        function carregarGrafico2() {
            var data = {
            labels: ['Iniciante', 'Intermediário', 'Experiente'],
            datasets: [{
            data: [listaNivel[0], listaNivel[1], listaNivel[2]],
            backgroundColor: ['#91D9E2', '#43919c','#9C95DC'],
        }]
            };
  
            var options = {
            responsive: true,
            maintainAspectRatio: false
            };
  
    new Chart(ctx1, {
    type: 'pie',
    data: data,
    options: options
  });
}

function obterUltimosDados() {
    fetch(`graficoUsuarios/dadosAtuais`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (response) {
        if (response.ok) {

            response.json().then(function (resposta) {

                usuarios.innerHTML = resposta[0].totais;
                projeto.innerHTML = resposta[1].totais;
            })    

        } else if (response.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + response.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}