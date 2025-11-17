function factorial(n) {
    if (n === 0) {
        return 1; // caso base
    }
    return n * factorial(n - 1); // chamada recursiva
}

console.log(factorial(8)); 
