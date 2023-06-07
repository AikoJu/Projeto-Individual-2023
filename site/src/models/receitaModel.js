var database = require("../database/config")


function cadastrarReceita(idUsuario,nomeReceita,materialReceita,pontosUtilizar,passoAPasso){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():",idUsuario,nomeReceita,materialReceita,pontosUtilizar,passoAPasso);
    var instrucao = `
        INSERT INTO receitas (nomeReceita, material ,pontosUtilizados,passoAPasso,fkUsuarioReceita) VALUES ('${nomeReceita}','${materialReceita}','${pontosUtilizar}','${passoAPasso}',${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterReceita(idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():");
    var instrucao = `
        SELECT * FROM receitas WHERE fkUsuarioReceita = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosReceita(idReceitas){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():");
    var instrucao = `
        SELECT * FROM receitas WHERE idReceitas = ${idReceitas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrarReceita,
    obterReceita,
    obterDadosReceita
};