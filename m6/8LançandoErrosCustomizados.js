class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

try {
  console.log(checkAge(-5));
} catch (e) {
  console.log(e.name + ": " + e.message);
}

console.log(checkAge(30));
try {
  console.log(checkAge(200));
} catch (e) {
  console.log(e.name + ": " + e.message);
}
