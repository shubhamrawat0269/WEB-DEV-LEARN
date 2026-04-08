let intervalId = setTimeout(() => {
    console.log('Hello, World!');
}, 3000);

// let intervalId = setInterval(() => {
//     console.log('Hello, World!');
// }, 1000)

clearTimeout(intervalId);