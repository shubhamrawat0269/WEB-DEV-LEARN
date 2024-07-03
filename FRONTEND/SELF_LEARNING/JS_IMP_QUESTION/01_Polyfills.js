// write polyfill of promise.all()

const dummyApi = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
};

const tasks = [dummyApi(1000), dummyApi(2000), dummyApi(3000)];

/* promise all polyfill */
const promisePolyfill = (tasks) => {
  return new Promise((res, rej) => {
    let output = [];

    tasks.forEach((promise, index) => {
      promise
        .then((data) => {
          console.log(data);
          output[index] = data;
          if (index === tasks.length - 1) res(output);
        })
        .catch((er) => rej(er));
    });
  });
};

promisePolyfill(tasks)
  .then((data) => {
    console.log(data);
  })
  .catch((er) => console.log(er));
