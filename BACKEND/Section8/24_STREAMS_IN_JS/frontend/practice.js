const input = document.querySelector("input");

const decoder = new TextDecoder();

input.addEventListener("change", async () => {
  const file = input.files[0];
  // const fileContent = await file.text();
  const readStream = file.stream();

  // const reader = readStream.getReader();
  // const data = await reader.read();
  // const data1 = await reader.read();
  // console.log(data);
  // console.log(data1);

  let count = 0;

  // while (true) {
  //   const { done, value } = await reader.read();

  //   if (done) break;
  //   console.log(decoder.decode(value));
  //   count++;
  // }

  for await (const chunk of readStream) {
    count++;
    console.log(chunk);
  }

  console.log(count);
});
