function greeting(name) {
  return `Welcome ${name}, Hope You're fine`;
}

function printDetails(details) {
  return `You're a ${details.prof}. Have experience of ${details.yearOfExp}. Your age is ${details.age}`;
}

module.exports = { greeting, printDetails };
