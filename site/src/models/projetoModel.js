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
        SELECT pontos, carreira, pontosAtual, carreiraAtual FROM projeto WHERE idProjeto = ${idProjeto};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    atualizarAtuais,
    obterDadosProjeto
};