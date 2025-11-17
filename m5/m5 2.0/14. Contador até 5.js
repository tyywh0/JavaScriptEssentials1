function countToFive() {
    let counter = 1;
    const interval = setInterval(() => {
        console.log(counter);
        if (counter === 5) {
            clearInterval(interval);
        }
        counter++;
    }, 1000);
}
countToFive();