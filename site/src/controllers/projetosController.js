var projetoModel = require("../models/projetoModel");



function listar(req, res) {
    var { idUsuario } = req.params;

    projetoModel.listar(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(resultado)
                res.status(200).json(resultado);
            } else {
                console.log(resultado)
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function cadastrar(req, res) {
    var nomeProjeto = req.body.nome;
    var { idUsuario } = req.params;
    
    if (nomeProjeto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        projetoModel.cadastrar(nomeProjeto,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDadosProjeto(req,res){
    var { idProjeto } = req.params
    projetoModel.obterDadosProjeto(idProjeto)
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(resultado)
                res.status(200).json(resultado);
            } else {
                console.log(resultado)
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


function atualizarAtuais(req,res){
    var { idProjeto } = req.params;
    var {pontos, carreira, pontosAtual, carreirasAtual } = req.body;
        
        projetoModel.atualizarAtuais(idProjeto, pontos, carreira, pontosAtual, carreirasAtual)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

   

module.exports = {
    cadastrar,
    listar,
    atualizarAtuais,
    obterDadosProjeto
}