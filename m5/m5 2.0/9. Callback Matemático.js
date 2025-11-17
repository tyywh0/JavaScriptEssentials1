function calculate(a, b, callback) {
    return callback(a, b);
}
console.log( calculate(4, 2, (x, y) => x + y) );

