var express = require("express");
var router = express.Router();

var graficoUsuarioController = require("../controllers/graficoUsuarioController.js");

router.get("/", function (req, res) {
    graficoUsuarioController.testar(req, res);
});

router.get("/dadosGrafico", function (req, res) {
    graficoUsuarioController.dadosGrafico(req, res);
});

router.get("/dadosAtuais", function (req,res) {
    graficoUsuarioController.dadosAtuais(req, res);
});


module.exports = router;