var express = require("express");
var router = express.Router();

var projetoController = require("../controllers/projetosController");


router.get("/listar/:idUsuario", function (req, res) {
    projetoController.listar(req, res);
});

router.post('/cadastrar/:idUsuario', function (req, res) {
    projetoController.cadastrar(req, res);
})

router.post('/atualizarAtuais/:idProjeto', function (req,res){
    projetoController.atualizarAtuais(req,res);
})

router.get("/obterDadosProjeto/:idProjeto", function (req,res){
    projetoController.obterDadosProjeto(req,res);
})


module.exports = router;