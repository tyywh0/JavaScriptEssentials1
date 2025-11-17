function fakeRequest(url, callback) {
    setTimeout(function() {
        callback(null, "OK");
    }, 1000);
}

fakeRequest("teste.com", function(err, data) {
    console.log(err, data);
});

