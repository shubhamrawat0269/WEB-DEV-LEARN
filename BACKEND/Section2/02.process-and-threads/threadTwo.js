const heavyComputation = () => {
    for (let i = 0; i < 20000000000; i++) {
        if (i % 2000000000 === 0) {
            console.log(`Thread Two: Loop ${i}`);
        }
    }
};

heavyComputation();
