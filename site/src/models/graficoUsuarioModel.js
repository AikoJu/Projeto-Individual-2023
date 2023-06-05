var database = require("../database/config");

function dadosGrafico() {
    var instrucao = 
    `SELECT usuario.nivel,count(nivel) as qtdUsuarios FROM usuario group by usuario.nivel;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosAtuais(){
    var instrucao = 
    `SELECT count(idUsuario) as totais FROM usuario UNION ALL SELECT count(idProjeto) FROM projeto;` 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    dadosGrafico,
    dadosAtuais
}
