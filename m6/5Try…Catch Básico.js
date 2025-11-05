function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // ✅ { nome: "Leandromeda" }
console.log(safeParse('texto inválido')); // ❌ null
