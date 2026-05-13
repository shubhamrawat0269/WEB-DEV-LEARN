import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("x", () => {
  // set of statement handled by event handler
  console.log("shubham event fire 1");
});

emitter.on("y", () => {
  // set of statement handled by event handler
  console.log("shubham event fire 2");
});

emitter.emit("y");
emitter.emit("x");
console.log("END OF PROGRAM");
