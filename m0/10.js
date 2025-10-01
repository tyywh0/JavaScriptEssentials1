let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log(z); //-> O resultado é 22.5 pois o código prioriza o que está entre parentêses.