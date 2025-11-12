let analysisType = "sum";

function analyzeNumbers(analysisType, numbers) {
  // Função auxiliar: soma
  function sumNumbers(arr) {
    let total = 0;
    for (let n of arr) total += n;
    return total;
  }

  // Função auxiliar: média
  function averageNumbers(arr) {
    let total = sumNumbers(arr);
    return total / arr.length;
  }

  // Shadowing de analysisType
  if (analysisType === "sum") {
    return sumNumbers(numbers);
  } else if (analysisType === "average") {
    return averageNumbers(numbers);
  } else {
    return "Tipo de análise inválido!";
  }
}

console.log("Soma:", analyzeNumbers("sum", [1, 2, 3, 4])); 
console.log("Média:", analyzeNumbers("average", [1, 2, 3, 4])); 
console.log("Global analysisType:", analysisType);