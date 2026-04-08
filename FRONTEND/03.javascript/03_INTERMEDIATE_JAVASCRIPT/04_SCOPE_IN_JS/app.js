const username = 'Shubham Rawat'
let userage = 27;
var a = 'Delhi';
// above are global scope variable

function add() {
    let a = 10;
    let b = 20;

    console.log(a)
    // console.log(userage)
}

// console.log(a,b);
add();


// console.log(username);
// console.log(userage);