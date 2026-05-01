const a = new ArrayBuffer(1.9 * 1024 * 1024 * 1024);
const view  = new ArrayBuffer(a);

for (let index = 0; index < view.byteLength; index++) {
    view.setInt8(index, index + 1);
}

console.log(view)