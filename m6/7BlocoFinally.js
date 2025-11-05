function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) return null;
    throw e;
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log(safeParse('{"ok": true}'));
console.log(safeParse('erro'));
