function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("5 é primo?", isPrime(5));
console.log("10 é primo?", isPrime(10));