function double(n) {
  return n * 2;
}
function quadruple(n) {
  return double(double(n));
}
console.log(quadruple(3));