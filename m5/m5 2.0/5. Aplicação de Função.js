function applyFunction(fn, value) {
    return fn(value); // aplica a função recebida ao valor
}
function soma10(n) {
    return n + 10;
}
console.log(applyFunction(soma10, 5)); // Deve imprimir 15
