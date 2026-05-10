# In this lecuture, we study about Buffer alloc & allocunsafe method differences.

1. Both method is used to allocate some memory from RAM.
2. But diff. is alloc() allocate the space and fill 0 making it less faster than allocunsafe.
3. ALthough, allocunsafe pick random space from memory whether they had occupy with value or
not.
4. Using allocunsafe is vulnerable to exposure of sensitive information which you are not 
willing to share. But they are fast as they do not perfrom fill operation.
5. After using allocunsafe, you need to fill some info which override sensitive info.

6. How can we test out allocUnsafe is faster as compared to alloc() ?

Try testing out below code on index.js file 

console.time('Buffer.alloc');
for(let i = 0;i < 100000; i++){
    Buffer.alloc(1024);
}
console.timeEnd('Buffer.alloc');


console.time('Buffer.allocUnsafe');
for(let i = 0;i < 100000; i++){
    Buffer.allocUnsafe(1024);
}
console.timeEnd('Buffer.allocUnsafe');
