const { Worker } = require('worker_threads');

new Worker('./threadOne');
new Worker('./threadTwo');
new Worker('./threadThree');