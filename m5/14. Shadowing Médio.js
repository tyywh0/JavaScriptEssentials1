let mode = "light";
function toggleMode(mode) {
  let newMode = mode === "light" ? "dark" : "light";
  console.log("Modo local:", newMode);
  console.log("Modo global:", window?.mode ?? globalThis.mode);
  return newMode;
}
toggleMode(mode);