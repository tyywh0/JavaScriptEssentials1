let idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); //-> Dentro do bloco: 30 e Fora do bloco: 30
}

console.log("Fora do bloco:", idade); //-> Dentro do bloco: 30 e Fora do bloco: 25