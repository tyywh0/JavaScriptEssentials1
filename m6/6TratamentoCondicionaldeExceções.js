function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    } else {
      throw e; // relança exceções inesperadas
    }
  }
}

console.log(safeParse('{"ok": true}')); // ✅
console.log(safeParse('erro'));         // ❌ null
