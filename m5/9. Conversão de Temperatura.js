function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("30°C =", toFahrenheit(30), "°F");
console.log("86°F =", toCelsius(86), "°C");
