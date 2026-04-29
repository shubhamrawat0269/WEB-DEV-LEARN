import fs from 'fs/promises';

const content = await fs.readFile('text.txt');
// console.log(content.toString())

function bufToStr(buf){
    let result = '';

    for(let i=0; i< buf.length; i++){
        // console.log(String.fromCharCode(buf[i]));
        result += String.fromCharCode(buf[i]);
    }
    return result;
}

console.log(bufToStr(content));