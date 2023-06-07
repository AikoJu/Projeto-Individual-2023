var database = require("../database/config")

function listar(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM projeto WHERE fkUsuarioProjeto = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeProjeto,idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeProjeto);
    

    var instrucao = `
        INSERT INTO projeto (nomeProjeto,fkUsuarioProjeto) VALUES ('${nomeProjeto}',${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarAtuais(idProjeto, pontos, carreira, pontosAtual, carreirasAtual){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",idProjeto, pontos, carreira, pontosAtual, carreirasAtual);
    
    var instrucao = `
         UPDATE projeto SET pontos = ${pontos} , carreira = ${carreira}, pontosAtual = ${pontosAtual},carreiraAtual = ${carreirasAtual}  where idProjeto = ${idProjeto};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function obterDadosProjeto(idProjeto){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nomeProjeto,pontos, carreira, pontosAtual, carreiraAtual FROM projeto WHERE idProjeto = ${idProjeto};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function apagarProjeto(idProjeto){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():",idProjeto);
    var instrucao = `
        DELETE from projeto WHERE idProjeto = ${idProjeto};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarReceita(idProjeto,nomeReceita,materialReceita,pontosUtilizar,passoAPasso){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():",idProjeto,nomeReceita,materialReceita,pontosUtilizar,passoAPasso);
    var instrucao = `
        INSERT INTO receitas (nomeReceita, material ,pontosUtilizados,passoAPasso,fkProjeto) VALUES ('${nomeReceita}','${materialReceita}','${pontosUtilizar}','${passoAPasso}',${idProjeto});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterReceita(idProjeto){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function apagarProjeto():",idProjeto);
    var instrucao = `
        SELECT nomeReceita, material ,pontosUtilizados,passoAPasso FROM receitas WHERE fkProjeto = ${idProjeto};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    atualizarAtuais,
    obterDadosProjeto,
    apagarProjeto,
    cadastrarReceita,
    obterReceita
};