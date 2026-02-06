for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// console.log("Done");

/*
 Output : Done 4 4 4
*/


let funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}

// funcs [0,1,2]
// funcs[0](); // 0
// funcs[2](); // 2


const user = { name: "Ria", settings: { theme: 0 } };
// console.log(user.settings?.theme)
// console.log(user.settings?.theme ?? "default");

async function example() {
  console.log(await Promise.resolve("X"));
  console.log("Y");
}
example();
console.log("Z");