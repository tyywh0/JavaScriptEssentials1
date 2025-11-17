// fakeRequest: espera 1s e chama callback(null, "OK")
function fakeRequest(url, callback) {
    setTimeout(function() {
        callback(null, "OK");
    }, 1000);
}

// Encadeamento: 3 chamadas uma dentro da outra
fakeRequest("url1", function(err1, data1) {
    console.log("1ª resposta:", err1, data1);

    fakeRequest("url2", function(err2, data2) {
        console.log("2ª resposta:", err2, data2);

        fakeRequest("url3", function(err3, data3) {
            console.log("3ª resposta:", err3, data3);
        });
    });
});
