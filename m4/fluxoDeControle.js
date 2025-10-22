const output = document.getElementById("output");
const menu = document.getElementById("menu");
const clearBtn = document.getElementById("clearBtn");

function show(msg) {
  output.textContent += msg + "\n";
}
clearBtn.onclick = () => output.textContent = "";

function ex1() {
  let n = Number(prompt("Digite um número:"));
  show(n > 0 ? "Positivo" : "Não positivo");
}
function ex2() {
  let n = Number(prompt("Digite um número:"));
  show(n % 2 === 0 ? "Par" : "Ímpar");
}
function ex3() {
  let t = prompt("Turno (M/T/N):").toUpperCase();
  if (t === "M") show("Bom dia!");
  else if (t === "T") show("Boa tarde!");
  else if (t === "N") show("Boa noite!");
  else show("Inválido");
}
function ex4() {
  let a = +prompt("Primeiro número:");
  let b = +prompt("Segundo número:");
  show("Maior: " + (a > b ? a : b));
}
function ex5() {
  let n = +prompt("Número:");
  show(n >= 0 ? "Positivo" : "Negativo");
}
function ex6() {
  let o = prompt("1-Início\n2-Sobre\n3-Sair");
  switch (o) {
    case "1": show("Você escolheu Início"); break;
    case "2": show("Você escolheu Sobre"); break;
    case "3": show("Saindo..."); break;
    default: show("Opção inválida");
  }
}
function ex7() {
  let i = 1;
  while (i <= 5) show(i++);
}
function ex8() {
  let i = 5;
  do show(i--); while (i >= 1);
}
function ex9() {
  for (let i = 1; i <= 10; i++) show(i);
}
function ex10() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) soma += i;
  show("Soma = " + soma);
}
function ex11() {
  let arr = [10, 20, 30, 40];
  for (let i = 0; i < arr.length; i++) show(arr[i]);
}
function ex12() {
  let nomes = ["Ana", "Bruno", "Clara", "Diego"];
  for (let nome of nomes) show(nome);
}
function ex13() {
  let pessoa = { nome: "Lucas", idade: 22, cidade: "Recife" };
  for (let prop in pessoa) show(`${prop}: ${pessoa[prop]}`);
}
function ex14() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) { show("Parou no 5"); break; }
    show(i);
  }
}
function ex15() {
  for (let i = 1; i <= 10; i++) {
    if (i === 7) continue;
    show(i);
  }
}
function ex16() {
  let nota = +prompt("Nota (0-10):");
  if (nota < 6) show("Reprovado");
  else if (nota < 8) show("Recuperação");
  else show("Aprovado");
}
function ex17() {
  let n = +prompt("Número para tabuada:");
  for (let i = 1; i <= 10; i++) show(`${n} x ${i} = ${n * i}`);
}
function ex18() {
  const dados = [10, "texto", true, 25, null, 3.14, "42", false, 0, NaN, Infinity];
  let contador = 0;
  for (const elemento of dados) {
    if (typeof elemento === "number" && Number.isFinite(elemento)) {
      contador++;
    }
  }
  const textoArray = dados.map(x => (x === null ? "null" : String(x))).join(", ");
  const mensagem = `O array contém ${contador} elemento(s) do tipo number (finitos).\nArray: [${textoArray}]`;

  if (typeof exibir === "function") {
    exibir(mensagem);
  } else if (typeof show === "function") {
    show(mensagem);
  } else {
    alert(mensagem);
  }
}

function ex19() {
  let p = prompt("Digite uma palavra:").toLowerCase();
  let inv = p.split("").reverse().join("");
  show(p === inv ? "É palíndromo" : "Não é palíndromo");
}
function ex20() {
  let o;
  do {
    o = prompt("1-Olá\n2-Data\n3-Sair");
    switch (o) {
      case "1": show("Olá 👋"); break;
      case "2": show("Data: " + new Date().toLocaleString()); break;
      case "3": show("Encerrando..."); break;
      default: show("Inválido");
    }
  } while (o !== "3");
}

for (let i = 1; i <= 20; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Exercício ${i}`;
  btn.onclick = () => window[`ex${i}`]();
  menu.appendChild(btn);
}

