function validacaoVazia(){
if(nomeUsuario ==  "" || emailUsuario == "" || senhaUsuario == "" || senhaConfirmacao == ""){
    divMensagem.style.display = `flex`
    divMensagem.innerHTML = `Preencha todos os campos!`
    setTimeout(()=>{divMensagem.style.display = `none`},5000)
}
}