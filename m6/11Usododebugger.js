function testeDebug(x) {
  const y = x * 2;
  debugger;
  return y;
}
testeDebug(5);

// Relatório:
// Quando a execução chega em "debugger", o código pausa automaticamente
// no painel de "Sources". Podemos inspecionar variáveis e continuar passo a passo.
