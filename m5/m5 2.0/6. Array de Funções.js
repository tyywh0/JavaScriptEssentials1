const operations = [
    function (a, b) { return a + b; }, // soma
    function (a, b) { return a - b; }, // subtração
    function (a, b) { return a * b; }  // multiplicação
];

for (let op of operations) {
    console.log(op(4, 2));
}
