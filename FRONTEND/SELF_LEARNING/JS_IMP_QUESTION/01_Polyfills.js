// write polyfill of promise.all()

const dummyApi = (time) => {
  /** customise promise for dummy api */
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
};

/* no. of asynchronous task in form of array */
const tasks = [dummyApi(1000), dummyApi(2000), dummyApi(3000)];

/* promise all polyfill */
const promiseAllPolyfill = (tasks) => {
  return new Promise((res, rej) => {
    let output = [];

    tasks.forEach((promise, index) => {
      promise
        .then((data) => {
          // console.log(data);
          output[index] = data;
          if (index === tasks.length - 1) res(output);
        })
        .catch((er) => rej(er));
    });
  });
};

promiseAllPolyfill(tasks)
  .then((data) => {
    console.log(data);
  })
  .catch((er) => console.log(er));



