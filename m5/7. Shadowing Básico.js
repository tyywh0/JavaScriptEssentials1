let x = 10;
function shadowExample(x) {
  console.log("Parâmetro x:", x); // imprime o valor local
  console.log("Variável global x:", window?.x ?? globalThis.x);
}
shadowExample(20);