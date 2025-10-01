function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); //-> Apareceu 10 pois a variável é global.
        console.log(b); //-> Vai aparecer dentro da condição if pois a variável let é limitada
    }
    console.log(a); //-> Apareceu 10 pois a variável é global.
    console.log(b); //- Não apareceu por estar dentro apenas do if.
}
testeEscopo();