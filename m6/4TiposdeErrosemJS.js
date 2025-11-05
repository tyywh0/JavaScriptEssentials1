// ReferenceError → ocorre ao usar uma variável que não foi declarada.
try {
  console.log(naoExiste);
} catch (e) {
  console.log("ReferenceError:", e.message);
}

// TypeError → ocorre quando usamos um método/propriedade incompatível com o tipo.
try {
  let num = 5;
  num.toUpperCase();
} catch (e) {
  console.log("TypeError:", e.message);
}

// SyntaxError → erro de sintaxe no código (detectado antes da execução).
// Exemplo: não pode ser capturado se o código nem executa
// let x = ;  // <- isso gera SyntaxError antes de rodar
