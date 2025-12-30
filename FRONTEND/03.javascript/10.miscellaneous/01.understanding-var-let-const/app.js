{
    const a = 5; 
    // console.log(a);
}

/* Variable Shadowing */

function test(){
    // functional scope
    let a = 'Hello';
    var b = 'Namaste';
    // let c = 'Aditi';

    if(true){
        // block scope
        let a = 'Bye'; // variable shadowing
        let b = 'Pranam'; // legal shadowing
        // var c = 'Sonal'; // illegal shadowing
        console.log(a);
        console.log(b);
        // console.log(c);
    }
    console.log(a);
    console.log(b);
    // console.log(c);
}

// test();


/* var, let, const -> Declaration & Initialization Context */

var a = 10;
let b = 20;
// const c;

var a = 40;
b = 50;

// console.log(a);
// console.log(b);
// console.log(c);


/* var, let, const -> Hoisting */
// console.log(num10);
// console.log(num11);

// var num10 = 10;
// let num11 = 20;


for (var i = 0; i < 3; i++) {
    var num = 10;
}
// console.log(num);


const obj = { name: "JS" };
// obj = "JavaScript";
// obj.name = "JavaScript";
// console.log(obj.name);

var a = 10;
{
    let a = 20;
  console.log(a);
}