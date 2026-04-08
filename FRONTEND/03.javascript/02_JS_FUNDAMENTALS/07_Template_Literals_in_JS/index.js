/*
  Learning from Template Literals in JavaScript + Strings in JavaScript with properties and methods

  ----------------------------------------

  1. Strings are indexed i.e we can access each character of a string using it's index.
  2. Index Starts from 0 and ends at length of string - 1.
  3. Strings properties and methods : 
    A. length : It returns the length of the string.

    ---------------------- Methods (without arguments) -----------------
    B. toUpperCase() : It converts the string to uppercase and returns the new string.
    C. toLowerCase() : It converts the string to lowercase and returns the new string.
    D. trim() : It removes whitespace from both ends of a string and returns the new string. 
       It can also be chained with other string methods. It contain : 
       A. trimStart() : It removes whitespace from the beginning of a string and returns the new string.
       B. trimEnd() : It removes whitespace from the end of a string and returns the new string.
    
    ---------------------- Methods (with arguments) -----------------
    
    E. includes() : It checks if a string contains a specified value and returns true or false.
    F. indexOf() : It returns the index of the first occurrence of a specified value in a string.
    G. lastIndexOf() : It returns the index of the last occurrence of a specified value in a string.
    H. slice() : It extracts a part of a string and returns it as a new string.
    I. substring() : It returns the part of the string between the start and end indexes, or to the end of the string.
    J. charAt() : It returns the character at the specified index in a string.
    K. replace() : It replaces a specified value with another value in a string and returns the new string.
    L. padStart() : It pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
    M. padEnd() : It pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.


    Template Strings :
    1. Strings can also be defined using backticks `` over single or double quotes. 
    2. Power of backticks is that it allows us to create multi line stirngs 
    3. Also, it allows us to embed js expression in Javascript using ${}.

  ------------------------------------------
*/

let str = "   Hello World!   ";
let bankAccountLastDigits = "6734";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.includes("world"));
console.log(str.includes("World"));

console.log(str.indexOf("o"));
console.log(str.indexOf("o", 5));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("o"));

console.log(str.slice(3, 8));
console.log(str.substring(3, 8));
console.log(str.charAt(3));

console.log(bankAccountLastDigits.padStart(12, "*"));
console.log(bankAccountLastDigits.padEnd(12, "*"));
console.log(str.trim().replace("Hellow World!", "Hi Everyone, I am learning JavaScript."));