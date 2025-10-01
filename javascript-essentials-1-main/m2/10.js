var mensagem = "Global"; 

function exibirMensagem() {
    let mensagemLocal = "Local";
    console.log(mensagem);       //-> acessa global dentro da função -> funciona
    console.log(mensagemLocal);  //-> acessa local dentro da função -> funciona
}
exibirMensagem();
console.log(mensagem);       //-> acessa global fora da função -> funciona
console.log(mensagemLocal);  //-> tenta acessar local fora da função -> erro
