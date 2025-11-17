// Exemplo 1: Arrow function (NÃO cria seu próprio this)
const objArrow = {
    name: "Jeniffer",
    sayThis: () => {
        console.log("Arrow this:", this);
    }
};

// Exemplo 2: Função tradicional (cria seu próprio this)
const objNormal = {
    name: "Jeniffer",
    sayThis: function() {
        console.log("Função tradicional this:", this);
    }
};

// Testes:
objArrow.sayThis();   // this NÃO será o objeto
objNormal.sayThis();  // this SERÁ o objeto
