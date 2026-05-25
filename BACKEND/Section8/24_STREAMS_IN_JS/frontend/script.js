const res = await fetch("http://localhost:4000/");
// const data = await res.text();

const decoder = new TextDecoder();

for await (const chunk of res.body) {
  console.log(decoder.decode(chunk));
}
