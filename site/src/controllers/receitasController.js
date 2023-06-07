var receitaModel = require("../models/receitaModel.js");

function cadastrarReceita(req,res){
    var { idUsuario } = req.params;
    var {nome, material, pontosUtilizados, passoAPasso } = req.body;
        
        receitaModel.cadastrarReceita(idUsuario, nome, material, pontosUtilizados, passoAPasso)
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

    function obterReceita(req,res){
        var {idUsuario } = req.params;
        receitaModel.obterReceita(idUsuario)
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

    module.exports = {
        cadastrarReceita,
        obterReceita
    }