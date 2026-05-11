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

7. Two Reasons why allocunsafe is fast then alloc is : 
  1. allocunsafe allocate the raw data to assigned memory . Ther's no operation like fill 0
  unlike alloc.

  2. Buffer Pool : It's an array of Bytes with size of 8GiB. It uses the same internal array buffer if assigned bytes is less than half the poolSize i.e 8 GiB.
