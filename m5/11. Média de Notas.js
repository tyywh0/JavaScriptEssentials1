function average(scores) {
  let soma = 0;
  for (let nota of scores) {
    soma += nota;
  }
  return soma / scores.length;
}
console.log("Média:", average([8, 7.5, 9, 10]));