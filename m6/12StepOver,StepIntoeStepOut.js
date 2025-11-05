function interno(m) {
  return m * 3;
}
function externo(n) {
  return interno(n) + 1;
}
externo(4);

// Step Into → entra dentro da função "interno" linha por linha.
// Step Over → executa "interno(n)" sem entrar, pulando direto para o retorno.
// Step Out → sai da função atual e volta para a que a chamou.
