const response = await fetch(`http://localhost:4000/`);
const data = await response.text();
// console.log(data);
// console.log(response.body)

for await (const chunk of response.body) {
  console.log(chunk);
}
