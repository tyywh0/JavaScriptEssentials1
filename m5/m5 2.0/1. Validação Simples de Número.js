function validateNumber(n) {
    if (typeof n === "number") {
        return true;
    }
    throw new Error("O valor informado não é um número!");
}
console.log( validateNumber("bca") );
