const input = document.querySelector("input");

input.addEventListener("change", async () => {
  const file = input.files[0];
  // const fileContent = await file.text();
  // console.log(fileContent);
  const readStream = file.stream();

  // const reader = readStream.getReader();
  // const result1 = await reader.read();
  // const result2 = await reader.read();
  // const result3 = await reader.read();
  // console.log(result1);
  // console.log(result2);
  // console.log(result3);

  // while (true) {
  //   const { done, value } = await reader.read();

  //   if (done) break;
  //   console.log(value);
  // }

  // for await (const chunk of readStream) {
  //   console.log(chunk);
  // }
});
