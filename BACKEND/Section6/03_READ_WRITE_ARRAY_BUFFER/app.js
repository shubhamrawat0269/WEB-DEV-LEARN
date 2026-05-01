const a = new ArrayBuffer(4);
const view = new DataView(a);

//  This is how we set value in ArrayBuffer

view.setInt8(0, 0o120); // octal
view.setInt8(1, 0x50); // hex
view.setInt8(2, 0b1010000); // binary
view.setInt8(3, 80); // decimal

//  This is how we get value in AB

view.getInt8(0); // octal
view.getInt8(1); // hex
view.getInt8(2); // binary
view.getInt8(3); // decimal value as signed value
view.getUint8(3); // decimal value as unsigned value

// console.log(a)