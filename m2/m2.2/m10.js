//Crie um array `times` com `"Flamengo"`, `"Palmeiras"` e `"São Paulo"`.
//1. Adicione `"Corinthians"` no final.
//2. Adicione `"Grêmio"` no início.
//3. Remova o último time.
//4. Encontre a posição do `"Palmeiras"`.
//5. Inverta a ordem dos times.
var times = ["Flamengo", "Palmeiras", "São Paulo"];

// 1. Adicione "Corinthians" no final
times.push("Corinthians");

// 2. Adicione "Grêmio" no início
times.unshift("Grêmio");

// 3. Remova o último time
times.pop();

// 4. Encontre a posição do "Palmeiras"
let posPalmeiras = times.indexOf("Palmeiras");

// 5. Inverta a ordem dos times
times.reverse();

console.log("Times atualizados:", times);
console.log("Posição do Palmeiras antes do reverse:", posPalmeiras);