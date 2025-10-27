document.getElementById("executar").addEventListener("click", () => {
  const opcao = document.getElementById("menuExercicios").value;
  const resultado = document.getElementById("resultado");

  switch (opcao) {
    case "ex1": resultado.textContent = listarNomes(); break;
    case "ex2": resultado.textContent = somarValores(); break;
    case "ex3": resultado.textContent = exibirObjeto(); break;
    case "ex4": resultado.textContent = contarPropriedades(); break;
    case "ex5": resultado.textContent = concatenarNomes(); break;
    case "ex6": resultado.textContent = tiposArray(); break;
    case "ex7": resultado.textContent = transformarObjeto(); break;
    case "ex8": resultado.textContent = objetoParaArray(); break;
    case "ex9": resultado.textContent = contarUnicos(); break;
    case "ex10": resultado.textContent = contarCaracteres(); break;
    default: resultado.textContent = "Escolha um exercício para executar.";
  }
});

// 🟢 Exercícios Fáceis
function listarNomes() {
  const nomes = prompt("Digite 5 nomes separados por vírgula:").split(",");
  let texto = "Nomes digitados:\n";
  for (let nome of nomes) {
    texto += nome.trim() + "\n";
  }
  return texto;
}

function somarValores() {
  const numeros = prompt("Digite números separados por vírgula:").split(",").map(Number);
  let soma = 0;
  for (let n of numeros) soma += n;
  return `Soma total: ${soma}`;
}

function exibirObjeto() {
  const pessoa = { nome: "Ana", idade: 25, cidade: "Curitiba" };
  let texto = "";
  for (let prop in pessoa) {
    texto += `${prop}: ${pessoa[prop]}\n`;
  }
  return texto;
}

function contarPropriedades() {
  const objeto = { a: 1, b: 2, c: 3, d: 4 };
  let contador = 0;
  for (let chave in objeto) contador++;
  return `O objeto possui ${contador} propriedades.`;
}

// 🟡 Exercícios Médios
function concatenarNomes() {
  const nomes = prompt("Digite nomes separados por vírgula:").split(",");
  let resultado = "";
  for (let nome of nomes) resultado += nome.trim() + ", ";
  return "Nomes concatenados: " + resultado.slice(0, -2);
}

function tiposArray() {
  const valores = prompt("Digite valores separados por vírgula:").split(",");
  let texto = "";
  for (let valor of valores) texto += `${valor.trim()} → ${typeof eval(valor)}\n`;
  return texto;
}

function transformarObjeto() {
  let pessoas = { Ana: 20, João: 30, Bia: 25 };
  for (let nome in pessoas) pessoas[nome]++;
  let texto = "";
  for (let nome in pessoas) texto += `${nome}: ${pessoas[nome]} anos\n`;
  return texto;
}

function objetoParaArray() {
  const objeto = { nome: "Lucas", idade: 19, cidade: "São Paulo" };
  let arr = [];
  for (let chave in objeto) arr.push(`${chave}: ${objeto[chave]}`);
  return arr.join("\n");
}

// 🔴 Exercícios Difíceis
function contarUnicos() {
  const numeros = prompt("Digite números separados por vírgula:").split(",").map(Number);
  const unicos = new Set();
  for (let n of numeros) unicos.add(n);
  return `Quantidade de valores únicos: ${unicos.size}`;
}

function contarCaracteres() {
  const frase = prompt("Digite uma frase:");
  const contagem = {};
  for (let letra of frase.replace(/\s+/g, "").toLowerCase()) {
    contagem[letra] = (contagem[letra] || 0) + 1;
  }
  let texto = "Contagem de caracteres:\n";
  for (let c in contagem) texto += `${c}: ${contagem[c]}\n`;
  return texto;
}

