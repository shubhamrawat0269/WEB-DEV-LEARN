// closures -> a function that references variables in the parent scope to it's inner scope.

// Q -> Write a function that would allow you to do this 

function createBase(num){
    return function(n){
        console.log(num+n);
    }
}


var addSix = createBase(6);
// addSix(10);
// addSix(21);


function find(){
    let a = [];
    for(let i=0;i<100000;i++){
        a[i] = i * i;
    }

    return function(index){
        console.log(a[index]);
    }

}


console.time('6');
const closure = find();
closure(6);
console.timeEnd('6');
console.time('12');
const closureTwo = find(12);
closureTwo(12);
console.timeEnd('12');
