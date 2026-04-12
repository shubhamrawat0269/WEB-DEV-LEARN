/*
 Octal Number System : Number System with base 8, using digits from 0 to 7.
 In Javscript , we can represent octal numbers using the prefix "0o". 
 VS Code gives us a hint to not use octal literals like this "012". 
 
 If we type an octal and try to console log it , it convert it into decimal. 

 We can use parseInt method to convert octal string to decimal number by providing
 second argument as 8 and first as number/string to be converted.

 To convert decimal to octal , we can do 

 const num = 172;
 console.log(num.toString(8));
*/

// const octalNumber = 0o10;
// console.log(octalNumber);

// function digitsToNumber(digits, radix = 10) {
//     return digits.reduce((acc, digit, index) => acc + digit * Math.pow(radix, index), 0);
// }

// console.log(digitsToNumber([7,3,2]));

