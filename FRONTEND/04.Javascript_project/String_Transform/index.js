// function convertStringFormats(input) {
//   const trimmed = input.trim();
//   const words = trimmed.toLowerCase().split(" ");

//   const toCamelCase = () =>
//     words
//       .map((word, index) =>
//         index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
//       )
//       .join("");

//   const toPascalCase = () =>
//     words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

//   const toSnakeCase = () => words.join("_");

//   const toKebabCase = () => words.join("-");

//   return {
//     trimmed: trimmed,
//     lowerCase: trimmed.toLowerCase(),
//     upperCase: trimmed.toUpperCase(),
//     camelCase: toCamelCase(),
//     pascalCase: toPascalCase(),
//     snakeCase: toSnakeCase(),
//     kebabCase: toKebabCase(),
//   };
// }

// Optimized solution as number of iteration removed as it handles in single loop with more variables state.
function convertStringFormats(input) {
  const trimmed = input.trim();
  const lower = trimmed.toLowerCase();
  const upper = lower.toUpperCase();
  const words = trimmed.toLowerCase().split(" ");

  let camelCase = "";
  let pascalCase = "";
  let snakeCase = "";
  let kebabCase = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

    camelCase += i === 0 ? word : capitalized;
    pascalCase += capitalized;
    snakeCase += (i > 0 ? "_" : "") + word;
    kebabCase += (i > 0 ? "-" : "") + word;
  }

  return {
    trimmed: trimmed,
    lowerCase: lower,
    upperCase: upper,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
  };
}

const inputBox = document.getElementById("input-box");
const lowercaseStr = document.getElementById("lowercase");
const uppercaseStr = document.getElementById("uppercase");
const camelcaseStr = document.getElementById("camelcase");
const pascalcaseStr = document.getElementById("pascalcase");
const snakecaseStr = document.getElementById("snakecase");
const kebabcaseStr = document.getElementById("kebabcase");
const trimStr = document.getElementById("trim");

inputBox.addEventListener("input", function () {
  const conversionList = convertStringFormats(inputBox.value);
  trimStr.innerHTML = conversionList.trimmed;
  lowercaseStr.innerHTML = conversionList.lowerCase;
  uppercaseStr.innerHTML = conversionList.upperCase;
  camelcaseStr.innerHTML = conversionList.camelCase;
  pascalcaseStr.innerHTML = conversionList.pascalCase;
  snakecaseStr.innerHTML = conversionList.snakeCase;
  kebabcaseStr.innerHTML = conversionList.kebabCase;
});
