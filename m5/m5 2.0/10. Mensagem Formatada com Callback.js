function formatMessage(msg, formatter) {
    return formatter(msg);
}
console.log(formatMessage("oi", function(m) {
    return m.toUpperCase();
}));
