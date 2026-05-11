const ab = new ArrayBuffer(3);
const uInt8Array = new Uint8Array(ab);

uInt8Array[0] = 97;
uInt8Array[1] = 98;
uInt8Array[2] = 99;


fetch("http://localhost:3000", {
  method: "POST",
  body: ab,
})
  .then((res) => res.text())
  .then((data) => console.log(data));
