var graficoUsuarioModel = require("../models/graficoUsuarioModel.js");

function dadosGrafico(req, res) {
    graficoUsuarioModel.dadosGrafico()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro bos dados do chefe: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    dadosGrafico
}

