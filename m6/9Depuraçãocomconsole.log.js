function soma(a, b) {
  console.log("Antes da soma:", a, b);
  let resultado = a + b;
  console.log("Depois da soma:", resultado);
  return resultado;
}

console.log(soma(2, undefined));
// Comentário: undefined + número resulta em NaN, pois não é um valor numérico válido.
