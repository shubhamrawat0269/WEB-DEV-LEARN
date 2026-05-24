const response = await fetch(`http://localhost:4000/`);
const data = await response.text();

console.log(data);
