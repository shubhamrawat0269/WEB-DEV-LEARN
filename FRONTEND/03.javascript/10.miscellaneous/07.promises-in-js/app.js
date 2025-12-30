console.log('start');

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        const result = false;
        if(result) resolve('Subscribed to this channel - Promise 1');
        else reject(new Error(`Why aren't you subscribed to this channel`))
    },2000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        const result = true;
        if(result) resolve('Subscribed to this channel - Promise 2');
        else reject(new Error(`Why aren't you subscribed to this channel`))
    },2000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        const result = false;
        if(result) resolve('Subscribed to this channel - Promise 3');
        else reject(new Error(`Why aren't you subscribed to this channel`))
    },2000)
})

console.log('end');

// p1
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// Promise.all([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.log(err, 'Error here'));


// Promise.allSettled([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.log(err, 'Error here'));

Promise.any([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => console.log(err, 'Error here'));