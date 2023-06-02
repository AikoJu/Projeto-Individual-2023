var database = require("../database/config");

function dadosGrafico() {
    var instrucao = 
    `SELECT usuario.nivel,count(nivel) as qtdUsuarios FROM usuario group by usuario.nivel;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    dadosGrafico
}
