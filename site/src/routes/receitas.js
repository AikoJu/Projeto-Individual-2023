var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitasController.js");


router.post('/cadastrarReceita/:idUsuario', function (req, res) {
    receitaController.cadastrarReceita(req, res);
})

router.get('/obterReceita/:idUsuario', function(req,res){
    receitaController.obterReceita(req,res);
})


router.get('/obterDadosReceita/:idReceitas', function(req,res){
    receitaController.obterDadosReceita(req,res);
})
module.exports = router;